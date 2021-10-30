module.exports = {
	selectLanguageName: 'Español',
	backToHome: 'Ir a la página de inicio',
	contributorsText: 'Colaboradores',
	editLinkText: 'Editar esta página',
	lastUpdatedText: 'Actualizado por última vez',
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
			text: 'Respaldos',
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
			text: 'Guía',
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
			text: 'Otros',
			children: [
				'faq',
				'troubleshooting',
				'credits',
				'site-navigation'
			]
		}
	]
};