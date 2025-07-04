const locale = 'en_US';
import { en_US as localeData } from './strings'

const backups = localeData.backups;
const guide = localeData.guide;
const extras = localeData.extras;
const other = localeData.other;

const sidebar_extras = {
	text: extras,
	items: [
		{ text: localeData.pages["dsiware-backups"], link: `/dsiware-backups` },
		{ text: localeData.pages["dumping-game-cards"], link: `/dumping-game-cards` },
		{ text: localeData.pages["file-extensions-windows"], link: `/file-extensions-windows` },
		{ text: localeData.pages["restoring-nand"], link: `/restoring-nand` },
		{ text: localeData.pages["sd-card-setup"], link: `/sd-card-setup` },
		{ text: localeData.pages["uninstalling-unlaunch"], link: `/uninstalling-unlaunch` }
	]
}

const sidebar_other = {
	text: other,
	items: [
		{ text: localeData.pages["faq"], link: `/faq` },
		{ text: localeData.pages["troubleshooting"], link: `/troubleshooting` },
		{ text: localeData.pages["credits"], link: `/credits` },
		{ text: localeData.pages["site-navigation"], link: `/site-navigation` }
	]
}

const themeConfig = {
	langMenuLabel: localeData.langMenuLabel,
	darkModeSwitchLabel: localeData.darkModeSwitchLabel,
	darkModeSwitchTitle: localeData.darkModeSwitchTitle,
	lightModeSwitchTitle: localeData.lightModeSwitchTitle,
	sidebarMenuLabel: localeData.sidebarMenuLabel,
	returnToTopLabel: localeData.returnToTopLabel,

	nav: [
		{ text: localeData.pages["sd-card-setup"], link: `/sd-card-setup` },
		{ text: localeData.pages["troubleshooting"], link: `/troubleshooting` },
		{ text: localeData.pages["faq"], link: `/faq` },
		{
			text: backups,
			items: [
				{ text: localeData.pages["dsiware-backups"], link: `/dsiware-backups` },
				{ text: localeData.pages["dumping-game-cards"], link: `/dumping-game-cards` },
				{ text: localeData.pages["dumping-nand"], link: `/dumping-nand` }
			]
		},
		{ text: localeData.pages["uninstalling-unlaunch"], link: `/uninstalling-unlaunch` }
	],
	sidebar: {
		[`/get-started`]: [
			{
				text: guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started`}, 
					{ text: localeData.pages["launching-the-exploit"], link: `/launching-the-exploit` },
					{ text: localeData.pages["launching-the-browser-exploit"], link: `/launching-the-browser-exploit` },
					{ text: localeData.pages["launching-the-flipnote-exploit"], link: `/launching-the-flipnote-exploit` },
					{ text: localeData.pages["dumping-nand"], link: `/dumping-nand` },
					{ text: localeData.pages["choosing-a-menu"], link: `/choosing-a-menu` }
					{ text: localeData.pages["installing-unlaunch"], link: `/installing-unlaunch` }
				]
			},
			sidebar_extras,
			sidebar_other
		],
		[`/launching-the-browser-exploit`]: [
			{
				text: guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started`}, 
					{ text: localeData.pages["launching-the-browser-exploit"], link: `/launching-the-browser-exploit` },
					{ text: localeData.pages["dumping-nand"], link: `/dumping-nand` },
					{ text: localeData.pages["choosing-a-menu"], link: `/choosing-a-menu` }
					{ text: localeData.pages["installing-unlaunch"], link: `/installing-unlaunch` }
				]
			},
			sidebar_extras,
			sidebar_other
		],
		[`/launching-the-flipnote-exploit`]: [
			{
				text: guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started`}, 
					{ text: localeData.pages["launching-the-flipnote-exploit"], link: `/launching-the-flipnote-exploit` },
					{ text: localeData.pages["dumping-nand"], link: `/dumping-nand` },
					{ text: localeData.pages["choosing-a-menu"], link: `/choosing-a-menu` }
					{ text: localeData.pages["installing-unlaunch"], link: `/installing-unlaunch` }
				]
			},
			sidebar_extras,
			sidebar_other
		],
		[`/`]: [
			{
				text: guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started`}, 
					{ text: localeData.pages["launching-the-exploit"], link: `/launching-the-exploit` },
					{ text: localeData.pages["dumping-nand"], link: `/dumping-nand` },
					{ text: localeData.pages["choosing-a-menu"], link: `/choosing-a-menu` }
					{ text: localeData.pages["installing-unlaunch"], link: `/installing-unlaunch` }
				]
			},
			sidebar_extras,
			sidebar_other
		]
	}
};

export default {
	lang: "en",
	label: "English",
    title: localeData.title,
    description: localeData.description,
	themeConfig: themeConfig
}