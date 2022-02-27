module.exports = {
	selectLanguageName: 'Română',
	backToHome: 'Du-mă acasă',
	editLinkText: 'Editează această pagină',
	openInNewWindow: 'deschide într-o fereastră nouă',
	selectLanguageAriaLabel: 'Selectează limba',
	toggleDarkMode: 'pornește modul întunecat',
	toggleSidebar: 'pornește bara laterală',
	discordNoticeText: 'Alătură-te serverului de Discord [DS⁽ⁱ⁾ Mode Hacking!](https://discord.gg/yD3spjv) pentru dezvoltarea ghidului și ajutor.',
	navbar: [
		'sd-card-setup',
		'troubleshooting',
		'faq',
		{
			text: 'Backup-uri',
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
			text: 'Ghid',
			children: [
				'launching-the-exploit',
				'dumping-nand',
				'installing-unlaunch'
			]
		},
		{
			text: 'Extra',
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
			text: 'Altele',
			children: [
				'faq',
				'troubleshooting',
				'credits',
				'site-navigation'
			]
		}
	]
};