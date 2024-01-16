const backups = 'Sauvegardes';
const guide = 'Guide';
const extras = 'Extras';
const other = 'Autres';
module.exports = {
	selectLanguageName: 'Français',
	backToHome: 'Me ramener à l\'accueil',
	editLinkText: 'Éditer cette page',
	openInNewWindow: 'ouvrir dans une nouvelle fenêtre',
	selectLanguageAriaLabel: 'Sélectionner la langue',
	toggleDarkMode: '(dés)activer le mode sombre',
	toggleSidebar: '(dés)activer la barre latérale',
	navbar: [
		'sd-card-setup',
		'troubleshooting',
		'faq',
		{
			text: backups,
			children: [
				'dsiware-backups',
				'dumping-game-cards',
				'dumping-nand'
			]
		},
		'uninstalling-unlaunch'
	],
	sidebar: {
		'/': [
			'index.html',
			{
				text: guide,
				children: [
					'get-started',
					'launching-the-exploit',
					'dumping-nand',
					'installing-unlaunch'
				]
			},
			{
				text: extras,
				children: [
					'dsiware-backups',
					'dumping-game-cards',
					'file-extensions-windows',
					'restoring-nand',
					'sd-card-setup',
					'uninstalling-unlaunch'
				]
			},
			{
				text: other,
				children: [
					'faq',
					'troubleshooting',
					'credits',
					'site-navigation'
				]
			}
		],
		'/get-started.html': [
			'index.html',
			{
				text: guide,
				children: [
					'get-started',
					'launching-the-exploit',
					'launching-the-browser-exploit',
					'launching-the-flipnote-exploit'
				]
			},
			{
				text: extras,
				children: [
					'dsiware-backups',
					'dumping-game-cards',
					'file-extensions-windows',
					'restoring-nand',
					'sd-card-setup',
					'uninstalling-unlaunch'
				]
			},
			{
				text: other,
				children: [
					'faq',
					'troubleshooting',
					'credits',
					'site-navigation'
				]
			}
		],
		'/launching-the-browser-exploit.html': [
			'index.html',
			{
				text: guide,
				children: [
					'get-started',
					'launching-the-browser-exploit',
					'dumping-nand',
					'installing-unlaunch'
				]
			},
			{
				text: extras,
				children: [
					'dsiware-backups',
					'dumping-game-cards',
					'file-extensions-windows',
					'restoring-nand',
					'sd-card-setup',
					'uninstalling-unlaunch'
				]
			},
			{
				text: other,
				children: [
					'faq',
					'troubleshooting',
					'credits',
					'site-navigation'
				]
			}
		],
		'/launching-the-flipnote-exploit.html': [
			'index.html',
			{
				text: guide,
				children: [
					'get-started',
					'launching-the-flipnote-exploit',
					'dumping-nand',
					'installing-unlaunch'
				]
			},
			{
				text: extras,
				children: [
					'dsiware-backups',
					'dumping-game-cards',
					'file-extensions-windows',
					'restoring-nand',
					'sd-card-setup',
					'uninstalling-unlaunch'
				]
			},
			{
				text: other,
				children: [
					'faq',
					'troubleshooting',
					'credits',
					'site-navigation'
				]
			}
		]
	}
};