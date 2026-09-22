import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	albums: [
		// 支持jpg/png/webp/avif/gif格式
		// id: 相册唯一标识符（用于目录命名和URL路径），比如设置：id: "firefly-2026", 对应 public/gallery/firefly-2026/目录
		// cover: 手动指定封面图（可选，不填会把cover.*文件作为封面图，如果没有cover.*文件，则使用第一张图片作为封面图）
		// name: 相册名称
		// description: 相册描述
		// location: 相册拍摄地点
		// date: 相册日期，格式为 YYYY-MM-DD，用于排序和显示
		// tags: 相册标签，用于分类和过滤
		// password: 访问密码，设置后需要输入密码才能查看相册内容（可选）
		// passwordHint: 密码提示，设置后在输入密码错误时显示（可选，需配合password使用）
		// 每添加一个数组项就相当于添加了一个相册，记得在 public/gallery/ 目录下创建对应的子目录并放入图片
		{
			id: "game",
			name: "游戏",
			description: "游戏世界奇遇！（",
			location: "游戏",
			date: "2026-01-01",
			tags: ["Half-Life: Alyx", "SCP: Secret Laboratory", "Minecraft", "PUBG", "CS 2"],
			extra: [
				"https://cdn.tasaed.top/image/game/game_1.avif",
				"https://cdn.tasaed.top/image/game/game_2.avif",
				"https://cdn.tasaed.top/image/game/game_3.avif",
				"https://cdn.tasaed.top/image/game/game_4.avif",
				"https://cdn.tasaed.top/image/game/game_5.avif",
				"https://cdn.tasaed.top/image/game/game_6.avif",
				"https://cdn.tasaed.top/image/game/game_7.avif",
				"https://cdn.tasaed.top/image/game/game_8.avif",
				"https://cdn.tasaed.top/image/game/game_9.avif",
				"https://cdn.tasaed.top/image/game/game_10.avif",
				"https://cdn.tasaed.top/image/game/game_11.avif",
				"https://cdn.tasaed.top/image/game/game_12.avif",
				"https://cdn.tasaed.top/image/game/game_13.avif",
				"https://cdn.tasaed.top/image/game/game_14.avif",
				"https://cdn.tasaed.top/image/game/game_15.avif",
				"https://cdn.tasaed.top/image/game/game_16.avif",
				"https://cdn.tasaed.top/image/game/game_17.avif",
				"https://cdn.tasaed.top/image/game/game_18.avif",
			],
		},
		{
			id: "dress",
			name: "女装",
			description: "好耶！是女装！",
			location: "呼和浩特",
			date: "2025-12-29",
			tags: ["女装"],
			extra: [
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_1.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_2.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_3.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_4.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_5.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_6.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_7.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_8.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_9.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_10.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_11.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_12.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_13.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_14.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_15.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_16.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_17.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_18.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_19.avif",
				"https://cdn.tasaed.top/image/ccd2s_dress/ccd2s_dress_20.avif",
			],
		},
	],

	// 瀑布流最小列宽(px)，浏览器根据容器宽度自动计算列数，默认 240
	// 值越小列数越多，值越大列数越少
	columnWidth: 240,
};
