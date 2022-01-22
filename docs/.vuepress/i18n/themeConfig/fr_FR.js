module.exports = {
	selectLanguageName: 'Français',
	backToHome: 'Me ramener à l\'accueil',
	editLinkText: 'Éditer cette page',
	lastUpdatedText: 'Dernière mise à jour',
	openInNewWindow: 'ouvrir dans une nouvelle fenêtre',
	selectLanguageAriaLabel: 'Sélectionner la langue',
	toggleDarkMode: '(dés)activer le mode sombre',
	toggleSidebar: '(dés)activer la barre latérale',
	discordNoticeText: 'Rejoignez le serveur Discord [DS⁽ⁱ⁾ Mode Hacking!](https://discord.gg/yD3spjv) pour le développement du guide et l\'aide.',
	navbar: [
		'sd-card-setup',
		'troubleshooting',
		'faq',
		{
			text: 'Sauvegardes',
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
			text: 'Autres',
			children: [
				'faq',
				'troubleshooting',
				'credits',
				'site-navigation'
			]
		}
	]
};