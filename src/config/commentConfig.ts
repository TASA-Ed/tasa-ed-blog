import type { CommentConfig } from "../types/config";

export const commentConfig: CommentConfig = {
	// 评论系统类型: none, twikoo, waline, giscus, disqus, artalk，默认为none，即不启用评论系统
	type: "artalk",

	// artalk评论系统配置
	artalk: {
		server: "https://talk.tasaed.top/", // 后端程序 API 地址
		locale: "zh-CN", // 设置 Artalk 语言
		visitorCount: true, // 文章访问量统计功能。
	},

};
