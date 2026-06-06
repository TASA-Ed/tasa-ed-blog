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
		LinkPreset.cPosts,
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
	// 可选：MeiliSearch
	// 选择MeiliSearch时：NavBarSearchMethod.MeiliSearch,
	method: NavBarSearchMethod.MeiliSearch,
	// 当选择 MeiliSearch 时的配置
	meiliSearchConfig: {
		INDEX_NAME: "astro_blog",
		CONTENT_DIR: "src/content/posts",
		MEILI_HOST: "https://api.tasaed.top/search",
		PUBLIC_MEILI_HOST: "https://api.tasaed.top/search",
		PUBLIC_MEILI_SEARCH_KEY:
			"abe955d602ba2a76e7ec203374535d5c0d3257afb0df5f8c14d9378da6859b70",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
