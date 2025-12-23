import type { CoverImageConfig } from "../types/config";

/**
 * 文章封面图配置
 *
 * enableInPost - 是否在文章详情页显示封面图
 *
 * 随机封面图使用说明：
 * 1. 在文章的 Frontmatter 中添加 image: "api" 即可使用随机图功能
 * 2. 系统会依次尝试所有配置的 API，全部失败后使用备用图片
 * 3. 如果 enable 为 false，则直接不显示封面图（也不会显示备用图）
 *
 * // 文章 Frontmatter 示例：
 * ---
 * title: 文章标题
 * image: "api"
 * ---
 */
export const coverImageConfig: CoverImageConfig = {
	// 是否在文章详情页显示封面图
	enableInPost: true,

	randomCoverImage: {
		// 随机封面图功能开关
		enable: false,
		// 封面图API列表
		apis: [],
	},
};
