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
		emoji: ["https://cdn.tasaed.top/i/2026/qq", "https://cdn.tasaed.top/i/2026/bmoji", "https://cdn.tasaed.top/i/2026/emoji/gifs", "https://cdn.tasaed.top/i/2026/emoji/jpgs"],
		login: "enable",
		recaptchaV3Key: "6LdVtPgrAAAAAJtpGCnbua8kHO7G5T-xrStf6fnY",
		reaction: ["https://cdn.tasaed.top/i/2026/bmoji/bmoji_thumb_up.png","https://cdn.tasaed.top/i/2026/emoji/reaction/181.png","https://cdn.tasaed.top/i/2026/emoji/reaction/297.png","https://cdn.tasaed.top/i/2026/bmoji/bmoji_doge.png","https://cdn.tasaed.top/i/2026/bmoji/bmoji_angry.png","https://cdn.tasaed.top/i/2026/bmoji/bmoji_um.png","https://cdn.tasaed.top/i/2026/emoji/reaction/38.png"],
		search: false,
		imageUploader: async (image: File) => {
			let formData = new FormData();
			let headers = new Headers();

			formData.append("file", image);
			headers.append("Accept", "application/json");

			const resp = await fetch("https://api.tasaed.top/image/upload/", {
				method: "POST",
				headers: headers,
				body: formData,
			});
			const resp_1 = await resp.json();
			if (resp_1.success === false) {
				throw new Error(resp_1.message);
			}
			return resp_1.data.links.url;
		},
		locales: {
			admin: '可爱的管理员',
			level0: '萌新',
			level1: '普通',
			level2: '高手',
			level3: '小佬',
			level4: '大佬',
			level5: '真萌新',
			reaction0: '点赞',
			reaction1: '戳一戳',
			reaction2: '拜谢',
			reaction3: 'Doge',
			reaction4: '生气',
			reaction5: '无语',
			reaction6: '敲打'
		}
	}

};
