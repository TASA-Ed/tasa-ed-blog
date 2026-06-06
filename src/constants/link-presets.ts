import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { LinkPreset, type NavBarLink } from "@/types/config";

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
	[LinkPreset.Home]: {
		name: i18n(I18nKey.home),
		url: "/",
		icon: "material-symbols:home",
	},
	[LinkPreset.About]: {
		name: i18n(I18nKey.about),
		url: "/about/",
		icon: "material-symbols:person",
	},
	[LinkPreset.Archive]: {
		name: i18n(I18nKey.archive),
		url: "/archive/",
		icon: "material-symbols:archive",
	},
	[LinkPreset.Friends]: {
		name: i18n(I18nKey.friends),
		url: "/friends/",
		icon: "material-symbols:group",
	},
	[LinkPreset.Sponsor]: {
		name: i18n(I18nKey.sponsor),
		url: "/sponsor/",
		icon: "material-symbols:favorite",
	},
	[LinkPreset.Guestbook]: {
		name: i18n(I18nKey.guestbook),
		url: "/guestbook/",
		icon: "material-symbols:chat",
	},
	[LinkPreset.Gallery]: {
		name: i18n(I18nKey.gallery),
		url: "/gallery/",
		icon: "material-symbols:photo-library",
	},
  [LinkPreset.cLink]: {
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
  [LinkPreset.cAbout]: {
    name: i18n(I18nKey.cNavAbout),
    url: "/content/",
    icon: "material-symbols:info",
    children: [
      LinkPreset.Sponsor,
      LinkPreset.About,
    ]
  },
	[LinkPreset.Tags]: {
		name: i18n(I18nKey.tags),
		url: "/tags/",
		icon: "material-symbols:tag-rounded",
	},
	[LinkPreset.Categories]: {
		name: i18n(I18nKey.categories),
		url: "/categories/",
		icon: "material-symbols:folder-open-rounded",
	},
};
