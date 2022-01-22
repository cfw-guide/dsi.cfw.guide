module.exports = {
	selectLanguageName: '中文 (简体)',
	backToHome: 'Take me home',
	editLinkText: 'Edit this page',
	lastUpdatedText: 'Last Updated',
	openInNewWindow: 'open in new window',
	selectLanguageAriaLabel: 'Select language',
	toggleDarkMode: 'toggle dark mode',
	toggleSidebar: 'toggle sidebar',
	discordNoticeText: 'Join the [DS⁽ⁱ⁾ Mode Hacking!](https://discord.gg/yD3spjv) Discord server for guide development and help.',
	navbar: [
		'sd-card-setup',
		'troubleshooting',
		'faq',
		{
			text: 'Backups',
			children: [
				'dsiware-backups',
				'dumping-game-cards',
				'dumping-nand'
			]
		},
		'uninstalling-unlaunch'
	],
	sidebar: [
		'index.html',
		{
			text: 'Guide',
			children: [
				'launching-the-exploit',
				'dumping-nand',
				'installing-unlaunch'
			]
		},
		{
			text: 'Extras',
			children: [
				'dsiware-backups',
				'dumping-game-cards',
				'file-extensions-(windows)',
				'restoring-nand',
				'sd-card-setup',
				'uninstalling-unlaunch'
			]
		},
		{
			text: 'Other',
			children: [
				'faq',
				'troubleshooting',
				'credits',
				'site-navigation'
			]
		}
	]
};