const locale = 'it_IT';
import { it_IT as localeData } from './strings'

const backups = localeData.backups;
const guide = localeData.guide;
const extras = localeData.extras;
const other = localeData.other;

const sidebar_extras = {
	text: extras,
	items: [
		{ text: localeData.pages["dsiware-backups"], link: `/${locale}/dsiware-backups` },
		{ text: localeData.pages["dumping-game-cards"], link: `/${locale}/dumping-game-cards` },
		{ text: localeData.pages["file-extensions-windows"], link: `/${locale}/file-extensions-windows` },
		{ text: localeData.pages["restoring-nand"], link: `/${locale}/restoring-nand` },
		{ text: localeData.pages["sd-card-setup"], link: `/${locale}/sd-card-setup` },
		{ text: localeData.pages["uninstalling-unlaunch"], link: `/${locale}/uninstalling-unlaunch` }
	]
}

const sidebar_other = {
	text: other,
	items: [
		{ text: localeData.pages["faq"], link: `/${locale}/faq` },
		{ text: localeData.pages["troubleshooting"], link: `/${locale}/troubleshooting` },
		{ text: localeData.pages["credits"], link: `/${locale}/credits` },
		{ text: localeData.pages["site-navigation"], link: `/${locale}/site-navigation` }
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
		{ text: localeData.pages["sd-card-setup"], link: `/${locale}/sd-card-setup` },
		{ text: localeData.pages["troubleshooting"], link: `/${locale}/troubleshooting` },
		{ text: localeData.pages["faq"], link: `/${locale}/faq` },
		{
			text: backups,
			items: [
				{ text: localeData.pages["dsiware-backups"], link: `/${locale}/dsiware-backups` },
				{ text: localeData.pages["dumping-game-cards"], link: `/${locale}/dumping-game-cards` },
				{ text: localeData.pages["dumping-nand"], link: `/${locale}/dumping-nand` }
			]
		},
		{ text: localeData.pages["uninstalling-unlaunch"], link: `/${locale}/uninstalling-unlaunch` }
	],
	sidebar: {
		[`/get-started`]: [
			{
				text: guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started`}, 
					{ text: localeData.pages["launching-the-exploit"], link: `/${locale}/launching-the-exploit` },
					{ text: localeData.pages["launching-the-browser-exploit"], link: `/${locale}/launching-the-browser-exploit` },
					{ text: localeData.pages["launching-the-flipnote-exploit"], link: `/${locale}/launching-the-flipnote-exploit` },
					{ text: localeData.pages["dumping-nand"], link: `/${locale}/dumping-nand` },
					{ text: localeData.pages["installing-unlaunch"], link: `/${locale}/installing-unlaunch` }
				]
			},
			sidebar_extras,
			sidebar_other
		],
		[`/launching-the-browser-exploit`]: [
			{
				text: guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started`}, 
					{ text: localeData.pages["launching-the-browser-exploit"], link: `/${locale}/launching-the-browser-exploit` },
					{ text: localeData.pages["dumping-nand"], link: `/${locale}/dumping-nand` },
					{ text: localeData.pages["installing-unlaunch"], link: `/${locale}/installing-unlaunch` }
				]
			},
			sidebar_extras,
			sidebar_other
		],
		[`/launching-the-flipnote-exploit`]: [
			{
				text: guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started`}, 
					{ text: localeData.pages["launching-the-flipnote-exploit"], link: `/${locale}/launching-the-flipnote-exploit` },
					{ text: localeData.pages["dumping-nand"], link: `/${locale}/dumping-nand` },
					{ text: localeData.pages["installing-unlaunch"], link: `/${locale}/installing-unlaunch` }
				]
			},
			sidebar_extras,
			sidebar_other
		],
		[`/`]: [
			{
				text: guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/${locale}/get-started`}, 
					{ text: localeData.pages["launching-the-exploit"], link: `/${locale}/launching-the-exploit` },
					{ text: localeData.pages["dumping-nand"], link: `/${locale}/dumping-nand` },
					{ text: localeData.pages["installing-unlaunch"], link: `/${locale}/installing-unlaunch` }
				]
			},
			sidebar_extras,
			sidebar_other
		]
	}
};

export default {
	lang: "it",
	label: "Italiano",
    title: localeData.title,
    description: localeData.description,
	themeConfig: themeConfig
}
