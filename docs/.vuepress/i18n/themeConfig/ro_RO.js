const backups = 'Backups';
const guide = 'Guide';
const extras = 'Extras';
const other = 'Other';
export default {
	selectLanguageName: 'Română',
	backToHome: 'Du-mă acasă',
	editLinkText: 'Editează această pagină',
	openInNewWindow: 'deschide într-o fereastră nouă',
	selectLanguageAriaLabel: 'Selectează limba',
	toggleDarkMode: 'pornește modul întunecat',
	toggleSidebar: 'pornește bara laterală',
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