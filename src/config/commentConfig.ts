import type { CommentConfig } from "../types/config";

export const commentConfig: CommentConfig = {
	// 评论系统类型: none, twikoo, waline, giscus, disqus, artalk，默认为none，即不启用评论系统
	type: "none",

	// artalk评论系统配置
	artalk: {
		server: "https://talk.tasaed.top/", // 后端程序 API 地址
		locale: "zh-CN", // 设置 Artalk 语言
		visitorCount: true, // 文章访问量统计功能。
	},

	waline: {
		serverURL: "https://api.tasaed.top/talk",
		search: false,
		recaptchaV3Key: "6LdVtPgrAAAAAJtpGCnbua8kHO7G5T-xrStf6fnY",
		login: "enable",
		emoji: ["https://cdn.tasaed.top/i/2026/qq", "https://cdn.tasaed.top/i/2026/bmoji", "https://cdn.tasaed.top/i/2026/emoji/gifs", "https://cdn.tasaed.top/i/2026/emoji/jpgs"],
		reaction: ["https://cdn.tasaed.top/i/2026/bmoji/bmoji_thumb_up.png","https://cdn.tasaed.top/i/2026/emoji/reaction/181.png","https://cdn.tasaed.top/i/2026/emoji/reaction/297.png","https://cdn.tasaed.top/i/2026/bmoji/bmoji_doge.png","https://cdn.tasaed.top/i/2026/bmoji/bmoji_angry.png","https://cdn.tasaed.top/i/2026/bmoji/bmoji_um.png","https://cdn.tasaed.top/i/2026/emoji/reaction/38.png"],
	}

};
