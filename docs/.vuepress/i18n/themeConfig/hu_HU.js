module.exports = {
	selectLanguageName: "Magyar",

	backToHome: "Take me home",
	contributorsText: "Contributors",
	danger: "DANGER",
	editLinkText: "Edit this page",
	lastUpdatedText: "Last Updated",
	openInNewWindow: "open in new window",
	selectLanguageAriaLabel: "Select language",
	tip: "INFO",
	toggleDarkMode: "toggle dark mode",
	toggleSidebar: "toggle sidebar",
	warning: "WARNING",

	navbar: [
		"sd-card-setup",
		"troubleshooting",
		"faq",
		{
			text: "Backups",
			children: [
				"dsiware-backups",
				"dumping-game-cards",
				"dumping-nand"
			]
		},
		"uninstalling-unlaunch"
	],

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
