import {
	LinkPreset,
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/config";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => {
	const links: (NavBarLink | LinkPreset)[] = [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.cLink,
		LinkPreset.Gallery,
		LinkPreset.Friends,
		LinkPreset.Guestbook,
		LinkPreset.cAbout
	];
	// 仅返回链接，其它导航搜索相关配置在模块顶层常量中独立导出
	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	// 可选：PageFind， MeiliSearch
	// 选择PageFind时：NavBarSearchMethod.PageFind,
	// 选择MeiliSearch时：NavBarSearchMethod.MeiliSearch,
	method: NavBarSearchMethod.MeiliSearch,
	// 当选择 MeiliSearch 时的配置
	meiliSearchConfig: {
		INDEX_NAME: "astro_blog",
		CONTENT_DIR: "src/content/posts",
		MEILI_HOST: "https://api.tasaed.top/search",
		PUBLIC_MEILI_HOST: "https://api.tasaed.top/search",
		PUBLIC_MEILI_SEARCH_KEY:
			"1b016cecb81c05ccbd4ceb98d1fb2153065ea01a03702be291782fb354ac7741",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
