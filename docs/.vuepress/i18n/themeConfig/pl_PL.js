const locale = 'pl_PL';
import { pl_PL as localeData } from './text'

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
		`/${locale}/sd-card-setup`,
		`/${locale}/troubleshooting`,
		`/${locale}/faq`,
		{
			text: backups,
			children: [
				`/${locale}/dsiware-backups`,
				`/${locale}/dumping-game-cards`,
				`/${locale}/dumping-nand`
			]
		},
		`/${locale}/uninstalling-unlaunch`
	],
	sidebar: {
		[`/${locale}/`]: [
			`/${locale}/index.html`,
			{
				text: guide,
				children: [
					`/${locale}/get-started`,
					`/${locale}/launching-the-exploit`,
					`/${locale}/dumping-nand`,
					`/${locale}/installing-unlaunch`
				]
			},
			{
				text: extras,
				children: [
					`/${locale}/dsiware-backups`,
					`/${locale}/dumping-game-cards`,
					`/${locale}/file-extensions-windows`,
					`/${locale}/restoring-nand`,
					`/${locale}/sd-card-setup`,
					`/${locale}/uninstalling-unlaunch`
				]
			},
			{
				text: other,
				children: [
					`/${locale}/faq`,
					`/${locale}/troubleshooting`,
					`/${locale}/credits`,
					`/${locale}/site-navigation`
				]
			}
		],
		[`/${locale}/get-started.html`]: [
			`/${locale}/index.html`,
			{
				text: guide,
				children: [
					`/${locale}/get-started`,
					`/${locale}/launching-the-exploit`,
					`/${locale}/launching-the-browser-exploit`,
					`/${locale}/launching-the-flipnote-exploit`
				]
			},
			{
				text: extras,
				children: [
					`/${locale}/dsiware-backups`,
					`/${locale}/dumping-game-cards`,
					`/${locale}/file-extensions-windows`,
					`/${locale}/restoring-nand`,
					`/${locale}/sd-card-setup`,
					`/${locale}/uninstalling-unlaunch`
				]
			},
			{
				text: other,
				children: [
					`/${locale}/faq`,
					`/${locale}/troubleshooting`,
					`/${locale}/credits`,
					`/${locale}/site-navigation`
				]
			}
		],
		[`/${locale}/launching-the-browser-exploit.html`]: [
			`/${locale}/index.html`,
			{
				text: guide,
				children: [
					`/${locale}/get-started`,
					`/${locale}/launching-the-browser-exploit`,
					`/${locale}/dumping-nand`,
					`/${locale}/installing-unlaunch`
				]
			},
			{
				text: extras,
				children: [
					`/${locale}/dsiware-backups`,
					`/${locale}/dumping-game-cards`,
					`/${locale}/file-extensions-windows`,
					`/${locale}/restoring-nand`,
					`/${locale}/sd-card-setup`,
					`/${locale}/uninstalling-unlaunch`
				]
			},
			{
				text: other,
				children: [
					`/${locale}/faq`,
					`/${locale}/troubleshooting`,
					`/${locale}/credits`,
					`/${locale}/site-navigation`
				]
			}
		],
		[`/${locale}/launching-the-flipnote-exploit.html`]: [
			`/${locale}/index.html`,
			{
				text: guide,
				children: [
					`/${locale}/get-started`,
					`/${locale}/launching-the-flipnote-exploit`,
					`/${locale}/dumping-nand`,
					`/${locale}/installing-unlaunch`
				]
			},
			{
				text: extras,
				children: [
					`/${locale}/dsiware-backups`,
					`/${locale}/dumping-game-cards`,
					`/${locale}/file-extensions-windows`,
					`/${locale}/restoring-nand`,
					`/${locale}/sd-card-setup`,
					`/${locale}/uninstalling-unlaunch`
				]
			},
			{
				text: other,
				children: [
					`/${locale}/faq`,
					`/${locale}/troubleshooting`,
					`/${locale}/credits`,
					`/${locale}/site-navigation`
				]
			}
		]
	}
};
