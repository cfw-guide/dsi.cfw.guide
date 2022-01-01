module.exports = {
	selectLanguageName: 'Italiano',
	backToHome: 'Torna all’inizio',
	editLinkText: 'Modifica questa pagina',
	lastUpdatedText: 'Ultimo aggiornamento',
	openInNewWindow: 'apri in nuova finestra',
	selectLanguageAriaLabel: 'Seleziona lingua',
	toggleDarkMode: 'attiva/disattiva modalità scura',
	toggleSidebar: 'attiva/disattiva barra laterale',
	discordNoticeText: 'Unisciti al server Discord [DS⁽ⁱ⁾ Mode Hacking!](https://discord.gg/yD3spjv) per lo sviluppo di guide e aiuto.',
	navbar: [
		'sd-card-setup',
		'troubleshooting',
		'faq',
		{
			text: 'Backup',
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
			text: 'Guida',
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
			text: 'Altro',
			children: [
				'faq',
				'troubleshooting',
				'credits',
				'site-navigation'
			]
		}
	]
};