const backups = '备份';
const guide = '指南';
const extras = '扩展';
const other = '其他';
module.exports = {
	selectLanguageName: '中文 (简体)',
	backToHome: '返回首页',
	editLinkText: '编辑此页面',
	openInNewWindow: '在新窗口打开',
	selectLanguageAriaLabel: '选择语言',
	toggleDarkMode: '切换暗色主题',
	toggleSidebar: '切换侧边栏',
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