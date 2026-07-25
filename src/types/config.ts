export type { Favicon, LIGHT_DARK_MODE, SiteConfig, WALLPAPER_MODE } from "./siteConfig";
export type {
	MeiliSearchConfig,
	NavBarConfig,
	NavBarLink,
	NavBarSearchConfig,
	NavBarSearchMethod,
} from "./navBarConfig";
export type { ProfileConfig } from "./profileConfig";
export type { LicenseConfig } from "./licenseConfig";
export type { CommentConfig } from "./commentConfig";
export type {
	ExpressiveCodeConfig,
	PluginCollapsibleConfig,
	PluginLanguageBadgeConfig,
} from "./expressiveCodeConfig";
export type { PlantUMLConfig } from "./plantumlConfig";
export type { AnnouncementConfig } from "./announcementConfig";
export type { FontSelectionConfig } from "./fontConfig";
export type { FooterConfig } from "./footerConfig";
export type { CoverImageConfig } from "./coverImageConfig";
export type {
	AdConfig,
	CalendarConfig,
	MobileBottomComponentConfig,
	SidebarLayoutConfig,
	SiteInfoConfig,
	WidgetComponentConfig,
	WidgetComponentType,
	WidgetSpecificConfig,
} from "./sidebarConfig";
export type { SakuraConfig } from "./effectsConfig";
export type { BackgroundWallpaperConfig } from "./backgroundWallpaper";
export type { FriendLink, FriendsPageConfig } from "./friendsConfig";
export type {
	SponsorConfig,
	SponsorItem,
	SponsorMethod,
} from "./sponsorConfig";
export type { GalleryAlbum, GalleryConfig } from "./galleryConfig";

export type BlogPostData = {
	body: string;
	title: string;
	published: Date;
	description: string;
	tags: string[];
	draft?: boolean;
	image?: string;
	category?: string;
	pinned?: boolean;
	prevTitle?: string;
	prevSlug?: string;
	nextTitle?: string;
	nextSlug?: string;
};

// 响应式图像布局类型
export type ResponsiveImageLayout = "constrained" | "full-width" | "none";

// 图像格式类型
export type ImageFormat = "avif" | "webp" | "png" | "jpg" | "jpeg" | "gif";
