const backups = 'Mentések';
const guide = 'Útmutató';
const extras = 'Extrák';
const other = 'Egyéb';
export default {
	selectLanguageName: 'Magyar',
	backToHome: 'Vissza a főoldalra',
	editLinkText: 'Ennek az oldalnak a szerkesztése',
	openInNewWindow: 'megnyitás új ablakban',
	selectLanguageAriaLabel: 'Válassz nyelvet',
	toggleDarkMode: 'sötét módra váltás',
	toggleSidebar: 'oldalsáv ki-bekapcsolás',
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