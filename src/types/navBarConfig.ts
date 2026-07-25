export type NavBarLink = {
	name: string;
	url: string;
	external?: boolean;
	icon?: string; // 菜单项图标
	children?: NavBarLink[]; // 支持子菜单
	pageKey?: string;
};

export enum NavBarSearchMethod {
	MeiliSearch = 1,
}

/**
 * MeiliSearch配置
 *
 * @property INDEX_NAME MeiliSearch索引名称
 * @property CONTENT_DIR 需要被索引的内容目录
 * @property MEILI_HOST MeiliSearch服务器地址
 * @property PUBLIC_MEILI_HOST 公共MeiliSearch服务器地址（前端使用）
 * @property PUBLIC_MEILI_SEARCH_KEY 公共MeiliSearch搜索密钥（前端使用）
 */
export type MeiliSearchConfig = {
	INDEX_NAME: string;
	CONTENT_DIR: string;
	MEILI_HOST: string;
	PUBLIC_MEILI_HOST: string;
	PUBLIC_MEILI_SEARCH_KEY: string;
};

export type NavBarSearchConfig = {
	meiliSearchConfig: MeiliSearchConfig;
};

export type NavBarConfig = {
	meiliSearchConfig: MeiliSearchConfig;
	links: NavBarLink[];
};
