import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

import { Meilisearch } from "meilisearch";

import { navBarSearchConfig } from "../config/index.ts";
import type { MeiliSearchDocument } from "../types/meilisearch.ts";

class MeiliSearchIndexer {
	private client: Meilisearch;

	constructor(
		private MEILI_HOST: string,
		private MEILI_MASTER_KEY: string | undefined,
		private INDEX_NAME: string,
		private documentsPath: string | URL,
	) {
		if (!MEILI_HOST || !INDEX_NAME || !documentsPath) {
			throw new Error(
				"Error: MeiliSearch configuration is incomplete. Please check your settings.",
			);
		}
		if (!MEILI_MASTER_KEY) {
			throw new Error(
				"Error: MeiliSearch master key is missing. Please provide the MEILI_MASTER_KEY environment variable.",
			);
		}
		this.client = new Meilisearch({
			host: this.MEILI_HOST,
			apiKey: this.MEILI_MASTER_KEY,
		});
		console.log("Running MeiliSearch Indexer:", MEILI_HOST);
	}

	async getDocuments(): Promise<MeiliSearchDocument[]> {
		const documents = JSON.parse(await fs.readFile(this.documentsPath, "utf-8"));
		if (!Array.isArray(documents)) {
			throw new Error("Error: MeiliSearch export must contain a JSON array.");
		}
		return documents;
	}

	async main(): Promise<void> {
		try {
			const documents = await this.getDocuments();
			// 删除旧索引
			await this.client.deleteIndexIfExists(this.INDEX_NAME);
			console.log(`Index '${this.INDEX_NAME}' deleted.`);

			if (documents.length === 0) {
				console.log("No documents found to index.");
				return;
			}
			console.log(`Found ${documents.length} documents to index.`);

			// 创建新索引
			const index = this.client.index(this.INDEX_NAME);

			// 更新配置
			const settingsTask = await index.updateSettings({
				searchableAttributes: ["title", "content", "description"],
				displayedAttributes: ["title", "description", "content", "pubDate", "slug"],
				sortableAttributes: ["pubDate"],
			});
			await this.waitForTask(settingsTask.taskUid);
			console.log("Index settings updated.");

			const documentsTask = await index.addDocuments(documents, {
				primaryKey: "id",
			});
			await this.waitForTask(documentsTask.taskUid);
			console.log("MeiliSearch indexing completed successfully!");
		} catch (error) {
			console.error("Error during indexing:", error);
			throw error;
		} finally {
			await fs.rm(this.documentsPath, { force: true });
		}
	}

	private async waitForTask(taskUid: number): Promise<void> {
		const task = await this.client.tasks.waitForTask(taskUid, {
			timeout: 120_000,
		});
		if (task.status !== "succeeded") {
			throw new Error(
				`MeiliSearch task ${taskUid} ${task.status}: ${task.error?.message ?? "Unknown error"}`,
			);
		}
	}
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isMain) {
	const { meiliSearchConfig } = navBarSearchConfig;
	if (!meiliSearchConfig) {
		console.error("Error: MeiliSearch configuration is missing in navBarConfig.");
		process.exit(1);
	}
	const MEILI_MASTER_KEY = process.env.MEILI_MASTER_KEY;
	const indexer = new MeiliSearchIndexer(
		meiliSearchConfig.MEILI_HOST,
		MEILI_MASTER_KEY,
		meiliSearchConfig.INDEX_NAME,
		path.resolve(process.argv[2] ?? "dist/meilisearch.json"),
	);

	await indexer.main();
	console.log("Indexing completed successfully.");
}

export default MeiliSearchIndexer;
