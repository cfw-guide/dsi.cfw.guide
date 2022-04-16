const backups = 'Respaldos';
const guide = 'Guía';
const extras = 'Extras';
const other = 'Otros';
module.exports = {
	selectLanguageName: 'Español',
	backToHome: 'Ir a la página de inicio',
	editLinkText: 'Editar esta página',
	openInNewWindow: 'abrir en una ventana nueva',
	selectLanguageAriaLabel: 'Elegir idioma',
	toggleDarkMode: 'act./desac. modo oscuro',
	toggleSidebar: 'act./desac. barra lateral',
	discordNoticeText: 'Únete al servidor [DS⁽ⁱ⁾ Mode Hacking!](https://discord.gg/yD3spjv) en Discord para obtener soporte y seguir el desarrollo de la guía.',
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