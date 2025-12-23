import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	title: "公告", // 公告标题
	content: "欢迎！本博客已在近期转向静态，但目前可能会有 bug ，如果您遇到 bug 请给我反馈，谢谢！", // 公告内容
	closable: true, // 允许用户关闭公告
	link: {
		enable: true, // 启用链接
		text: "了解更多", // 链接文本
		url: "/about/", // 链接 URL
		external: true, // 内部链接
	},
};
