module.exports = {
	selectLanguageName: 'Magyar',
	backToHome: 'Vissza a főoldalra',
	editLinkText: 'Ennek az oldalnak a szerkesztése',
	openInNewWindow: 'megnyitás új ablakban',
	selectLanguageAriaLabel: 'Válassz nyelvet',
	toggleDarkMode: 'sötét módra váltás',
	toggleSidebar: 'oldalsáv ki-bekapcsolás',
	discordNoticeText: 'Csatlakozz a [DS⁽ⁱ⁾ Mode Hacking!](https://discord.gg/yD3spjv) Discord szerverhez az útmutató fejlesztéséhez és segítségért.',
	navbar: [
		'sd-card-setup',
		'troubleshooting',
		'faq',
		{
			text: 'Mentések',
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
			text: 'Útmutató',
			children: [
				'launching-the-exploit',
				'dumping-nand',
				'installing-unlaunch'
			]
		},
		{
			text: 'Extrák',
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
			text: 'Egyéb',
			children: [
				'faq',
				'troubleshooting',
				'credits',
				'site-navigation'
			]
		}
	]
};