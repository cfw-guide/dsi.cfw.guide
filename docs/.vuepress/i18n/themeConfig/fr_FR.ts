import type { DefaultThemeLocaleOptions } from '@vuepress/theme-default';

export const fr_FR: DefaultThemeLocaleOptions = {
	selectLanguageName: "Français",

	backToHome: "Take me home",
	contributorsText: "Contributors",
	danger: "DANGER",
	editLinkText: "Edit this page",
	lastUpdatedText: "Last Updated",
	openInNewWindow: "open in new window",
	selectLanguageAriaLabel: "Select language",
	selectLanguageText: "Languages",
	tip: "INFO",
	toggleDarkMode: "toggle dark mode",
	toggleSidebar: "toggle sidebar",
	warning: "WARNING",

	sidebar: [
		"index.html",
		{
			text: "Guide",
			children: [
				"launching-the-exploit",
				"dumping-nand",
				"installing-unlaunch"
			]
		},
		{
			text: "Extras",
			children: [
				"dsiware-backups",
				"dumping-game-cards",
				"dumping-nand",
				"file-extensions-(windows)",
				"restoring-nand",
				"sd-card-setup",
				"uninstalling-unlaunch"
			]
		},
		{
			text: "Other",
			children: [
				"faq",
				"troubleshooting",
				"credits",
				"site-navigation"
			]
		}
	]
};
