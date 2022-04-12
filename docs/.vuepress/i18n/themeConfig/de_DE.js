module.exports = {
	selectLanguageName: 'Deutsch',
	backToHome: 'Zurück zur Startseite',
	editLinkText: 'Bearbeite diese Seite',
	openInNewWindow: 'in einem neuen Fenster öffnen',
	selectLanguageAriaLabel: 'Sprache auswählen',
	toggleDarkMode: 'dunkles Design an-/ausschalten',
	toggleSidebar: 'Seitenleiste ein-/ausblenden',
	discordNoticeText: 'Trete dem "[DS⁽ⁱ⁾ Mode Hacking!](https://discord.gg/yD3spjv)" Discord Server bei, um Verbesserungen für die Anleitung vorzuschlagen und Hilfe zu erhalten.',
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
			text: 'Anleitung',
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
			text: 'Sonstiges',
			children: [
				'faq',
				'troubleshooting',
				'credits',
				'site-navigation'
			]
		}
	]
};