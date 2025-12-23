import {
	LinkPreset,
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/config";
import { siteConfig } from "./siteConfig";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => {
	const links: (NavBarLink | LinkPreset)[] = [
		LinkPreset.Home,
		LinkPreset.Archive,
	];

	// 支持自定义导航栏链接,并且支持多级菜单
	links.push({
		name: "链接",
		url: "/links/",
		icon: "material-symbols:link",
		children: [
			{
				name: "GitHub",
				url: "https://github.com/CuteLeaf/Firefly",
				external: true,
				icon: "fa6-brands:github",
			},
			{
				name: "Bilibili",
				url: "https://space.bilibili.com/38932988",
				external: true,
				icon: "fa6-brands:bilibili",
			},
		],
	});

	links.push(LinkPreset.Friends);

	// 根据配置决定是否添加留言板页面
	if (siteConfig.pages.guestbook) {
		links.push(LinkPreset.Guestbook);
	}

	links.push({
		name: "关于",
		url: "/content/",
		icon: "material-symbols:info",
		children: [
			...(siteConfig.pages.sponsor ? [LinkPreset.Sponsor] : []), // 根据配置决定是否添加赞助页面
			LinkPreset.About,
			...(siteConfig.pages.bangumi ? [LinkPreset.Bangumi] : []), // 根据配置决定是否添加番组计划页面
		],
	});
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
