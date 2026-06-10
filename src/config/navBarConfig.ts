import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
} from "../types/config";
import { i18n } from "@i18n/translation.ts";
import I18nKey from "@i18n/i18nKey.ts";

// ============================================================================
// 导航栏配置 - 根据顺序动态生成导航栏链接
// NavBar Configuration - Dynamically generate navigation bar links based on order
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 仅返回链接，其它导航搜索相关配置在模块顶层常量中独立导出
	// 基础导航栏链接
	const links: NavBarLink[] = [
		LinkPresets.Home,
		{
			name: i18n(I18nKey.siteStatsPostCount),
			url: "/content/",
			icon: "material-symbols:article-outline",
			children: [
				LinkPresets.Archive,
				LinkPresets.Tags,
				LinkPresets.Categories
			]
		},
		LinkPresets.cLink,
		LinkPresets.Gallery,
		LinkPresets.Friends,
		LinkPresets.Guestbook,
		{
			name: i18n(I18nKey.cNavAbout),
			url: "/content/",
			icon: "material-symbols:info",
			children: [
				LinkPresets.Sponsor,
				LinkPresets.About,
			]
		}
	];

	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	meiliSearchConfig: {
		INDEX_NAME: "astro_blog",
		CONTENT_DIR: "src/content/posts",
		MEILI_HOST: "https://api.tasaed.top/search",
		PUBLIC_MEILI_HOST: "https://api.tasaed.top/search",
		PUBLIC_MEILI_SEARCH_KEY:
			"abe955d602ba2a76e7ec203374535d5c0d3257afb0df5f8c14d9378da6859b70",
	},
};

// ============================================================================
// 链接预设 - 可自由自定义导航栏链接的名称、图标和URL
// Link Presets - Allows free customization of the name, icon, and URL of navigation bar links
// ============================================================================
export const LinkPresets: Record<string, NavBarLink> = {
	Home: {
		name: i18n(I18nKey.home),
		url: "/",
		icon: "material-symbols:home",
	},
	Archive: {
		name: i18n(I18nKey.archive),
		url: "/archive/",
		icon: "material-symbols:archive",
	},
	Friends: {
		name: i18n(I18nKey.friends),
		url: "/friends/",
		icon: "material-symbols:group",
	},
	Sponsor: {
		name: i18n(I18nKey.sponsor),
		url: "/sponsor/",
		icon: "material-symbols:favorite",
	},
	Guestbook: {
		name: i18n(I18nKey.guestbook),
		url: "/guestbook/",
		icon: "material-symbols:chat",
	},
	About: {
		name: i18n(I18nKey.about),
		url: "/about/",
		icon: "material-symbols:person",
	},
	Gallery: {
		name: i18n(I18nKey.gallery),
		url: "/gallery/",
		icon: "material-symbols:photo-library",
	},
	cLink: {
		name: i18n(I18nKey.cNavLink),
		url: "/links/",
		icon: "material-symbols:link",
		children: [
			{
				name: "GitHub",
				url: "https://github.com/ccd2s",
				external: true,
				icon: "fa7-brands:github",
			},
			{
				name: "Bilibili",
				url: "https://space.bilibili.com/1936406435",
				external: true,
				icon: "fa7-brands:bilibili",
			},
			{
				name: "QQ群",
				url: "https://qm.qq.com/cgi-bin/qm/qr?k=meZHnANAtGqxFXNHBnad1m1ms3li_Pgj&jump_from=webapi&authKey=YfabJovSWyCBqhrV7B5VWkVSG5hQTsd19AEvjMTFy2jafZ9goaIlJOm9jh7dv6f/",
				external: true,
				icon: "fa7-brands:qq",
			},
		]
	},
	Tags: {
		name: i18n(I18nKey.tags),
		url: "/tags/",
		icon: "material-symbols:tag-rounded",
	},
	Categories: {
		name: i18n(I18nKey.categories),
		url: "/categories/",
		icon: "material-symbols:folder-open-rounded",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
