import type { AstroIntegration } from "astro";
import { navBarSearchConfig } from "../config/index.ts";
import MeiliSearchIndexer from "../scripts/index-to-meilisearch.mts";

/**
 * Astro 集成，用于在构建结束时运行 Search 索引器
 * @returns AstroIntegration
 */
export default function searchIndexer() {
  const data: AstroIntegration = {
    name: "search-indexer",
    hooks: {
      "astro:build:done": async () => {
        console.log(
          `${"=".repeat(10)}Running Search Indexer...${"=".repeat(10)}`,
        );
        const meiliSearchConfig = navBarSearchConfig.meiliSearchConfig;
        if (!meiliSearchConfig) {
          process.exit(1);
        }
        const MEILI_MASTER_KEY = process.env.MEILI_MASTER_KEY;
        const indexer = new MeiliSearchIndexer(
          meiliSearchConfig.MEILI_HOST,
          MEILI_MASTER_KEY,
          meiliSearchConfig.INDEX_NAME,
          meiliSearchConfig.CONTENT_DIR,
        );
        await indexer.main();
        console.log(`${"=".repeat(10)}Search Indexer Done.${"=".repeat(10)}`);
      },
    },
  };
  return data;
}
