const locale = 'en_US';
import { en_US as localeData } from './text'

const backups = localeData.backups;
const guide = localeData.guide;
const extras = localeData.extras;
const other = localeData.other;

export default {
	selectLanguageName: localeData.selectLanguageName,
	backToHome: localeData.backToHome,
	editLinkText: localeData.editLinkText,
	openInNewWindow: localeData.openInNewWindow,
	selectLanguageAriaLabel: localeData.selectLanguageAriaLabel,
	toggleDarkMode: localeData.toggleDarkMode,
	toggleSidebar: localeData.toggleSidebar,
	navbar: [
		`/sd-card-setup`,
		`/troubleshooting`,
		`/faq`,
		{
			text: backups,
			children: [
				`/dsiware-backups`,
				`/dumping-game-cards`,
				`/dumping-nand`
			]
		},
		`/uninstalling-unlaunch`
	],
	sidebar: {
		[`/`]: [
			`/index.html`,
			{
				text: guide,
				children: [
					`/get-started`,
					`/launching-the-exploit`,
					`/dumping-nand`,
					`/installing-unlaunch`
				]
			},
			{
				text: extras,
				children: [
					`/dsiware-backups`,
					`/dumping-game-cards`,
					`/file-extensions-windows`,
					`/restoring-nand`,
					`/sd-card-setup`,
					`/uninstalling-unlaunch`
				]
			},
			{
				text: other,
				children: [
					`/faq`,
					`/troubleshooting`,
					`/credits`,
					`/site-navigation`
				]
			}
		],
		[`/get-started.html`]: [
			`/index.html`,
			{
				text: guide,
				children: [
					`/get-started`,
					`/launching-the-exploit`,
					`/launching-the-browser-exploit`,
					`/launching-the-flipnote-exploit`
				]
			},
			{
				text: extras,
				children: [
					`/dsiware-backups`,
					`/dumping-game-cards`,
					`/file-extensions-windows`,
					`/restoring-nand`,
					`/sd-card-setup`,
					`/uninstalling-unlaunch`
				]
			},
			{
				text: other,
				children: [
					`/faq`,
					`/troubleshooting`,
					`/credits`,
					`/site-navigation`
				]
			}
		],
		[`/launching-the-browser-exploit.html`]: [
			`/index.html`,
			{
				text: guide,
				children: [
					`/get-started`,
					`/launching-the-browser-exploit`,
					`/dumping-nand`,
					`/installing-unlaunch`
				]
			},
			{
				text: extras,
				children: [
					`/dsiware-backups`,
					`/dumping-game-cards`,
					`/file-extensions-windows`,
					`/restoring-nand`,
					`/sd-card-setup`,
					`/uninstalling-unlaunch`
				]
			},
			{
				text: other,
				children: [
					`/faq`,
					`/troubleshooting`,
					`/credits`,
					`/site-navigation`
				]
			}
		],
		[`/launching-the-flipnote-exploit.html`]: [
			`/index.html`,
			{
				text: guide,
				children: [
					`/get-started`,
					`/launching-the-flipnote-exploit`,
					`/dumping-nand`,
					`/installing-unlaunch`
				]
			},
			{
				text: extras,
				children: [
					`/dsiware-backups`,
					`/dumping-game-cards`,
					`/file-extensions-windows`,
					`/restoring-nand`,
					`/sd-card-setup`,
					`/uninstalling-unlaunch`
				]
			},
			{
				text: other,
				children: [
					`/faq`,
					`/troubleshooting`,
					`/credits`,
					`/site-navigation`
				]
			}
		]
	}
};
