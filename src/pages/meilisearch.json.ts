import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import type { MeiliSearchDocument } from "@/types/meilisearch";
import { getPostUrlBySlug } from "@/utils/url-utils";

export const prerender = true;

export const GET: APIRoute = async () => {
	const posts = await getCollection("posts", ({ data }) => !data.draft);
	const documents: MeiliSearchDocument[] = posts.map((post, id) => ({
		id,
		slug: getPostUrlBySlug(post.id),
		title: post.data.title,
		description: post.data.description,
		content: (post.body ?? "")
			.replace(/```[\s\S]*?```/g, "")
			.replace(/(^|\n)( {4,}|\t).*(\n|$)/g, "\n")
			.replace(/`[^`]*`/g, "")
			.replace(/---[\s\S]*?---/g, "")
			.replace(/<[^>]+>/g, "")
			.replace(/[#*_~[\]()\-+=>|{}]/g, "")
			.replace(/\s+/g, " ")
			.trim(),
		pubDate: post.data.published.getTime(),
	}));

	return Response.json(documents);
};
