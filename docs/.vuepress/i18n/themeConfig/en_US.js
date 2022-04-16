const backups = "Backups";
const guide = "Guide";
const extras = "Extras";
const other = "Other";

module.exports = {
	selectLanguageName: "English",

	backToHome: "Take me home",
	editLinkText: "Edit this page",
	openInNewWindow: "open in new window",
	selectLanguageAriaLabel: "Select language",
	toggleDarkMode: "toggle dark mode",
	toggleSidebar: "toggle sidebar",
	discordNoticeText: "Join the [DS⁽ⁱ⁾ Mode Hacking!](https://discord.gg/yD3spjv) Discord server for guide development and help.",

	navbar: [
		"sd-card-setup",
		"troubleshooting",
		"faq",
		{
			text: backups,
			children: [
				"dsiware-backups",
				"dumping-game-cards",
				"dumping-nand"
			]
		},
		"uninstalling-unlaunch"
	],

	sidebar: {
		"/": [
			"index.html",
			{
				text: guide,
				children: [
					"get-started",
					"launching-the-exploit",
					"dumping-nand",
					"installing-unlaunch"
				]
			},
			{
				text: extras,
				children: [
					"dsiware-backups",
					"dumping-game-cards",
					"file-extensions-windows",
					"restoring-nand",
					"sd-card-setup",
					"uninstalling-unlaunch"
				]
			},
			{
				text: other,
				children: [
					"faq",
					"troubleshooting",
					"credits",
					"site-navigation"
				]
			}
		],
		"/get-started.html": [
			"index.html",
			{
				text: guide,
				children: [
					"get-started",
					"launching-the-exploit",
					"launching-the-flipnote-exploit"
				]
			},
			{
				text: extras,
				children: [
					"dsiware-backups",
					"dumping-game-cards",
					"file-extensions-windows",
					"restoring-nand",
					"sd-card-setup",
					"uninstalling-unlaunch"
				]
			},
			{
				text: other,
				children: [
					"faq",
					"troubleshooting",
					"credits",
					"site-navigation"
				]
			}
		],
		"/launching-the-flipnote-exploit.html": [
			"index.html",
			{
				text: guide,
				children: [
					"get-started",
					"launching-the-flipnote-exploit",
					"dumping-nand",
					"installing-unlaunch"
				]
			},
			{
				text: extras,
				children: [
					"dsiware-backups",
					"dumping-game-cards",
					"file-extensions-windows",
					"restoring-nand",
					"sd-card-setup",
					"uninstalling-unlaunch"
				]
			},
			{
				text: other,
				children: [
					"faq",
					"troubleshooting",
					"credits",
					"site-navigation"
				]
			}
		]
	}
};
