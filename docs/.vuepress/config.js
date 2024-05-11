import { i18n, themeConfig } from "./i18n/index"
import { emiylTheme } from "./vuepress-theme";
import { viteBundler } from '@vuepress/bundler-vite';

themeConfig.translate.selectLanguageName = "Translate";

const locales = Object.fromEntries(
	Object.entries(i18n)
		.filter(([key, value]) => key !== 'en_US')
		.map(([key, value]) => ["/" + key + "/", Object.assign({ lang: key }, value)]));
locales["/"] = i18n.en_US;
locales["/translate/"].head = [
	[ 'script', {}, "var _jipt=[];_jipt.push(['project','dsi-guide']);_jipt.push(['escape',function(){window.location.href='https://dsi.cfw.guide'}]);" ],
	[ 'script', {src: "//cdn.crowdin.com/jipt/jipt.js"} ]
];

const themeLocales = Object.fromEntries(
	Object.entries(themeConfig)
		.filter(([key, value]) => key !== 'en_US')
		.map(([key, value]) => ["/" + key + "/", value]));
themeLocales["/"] = themeConfig.en_US;

module.exports = {
	locales,
	theme: emiylTheme({
		repo: "cfw-guide/dsi.cfw.guide",
		docsBranch: "master",
		docsDir: "docs",
		selectLanguageText: '<i class="fas fa-globe"></i>',
      		repoLabel: '<i class="fab fa-github icon"></i>',
		adUnits: [
			"8408",
			"8442"
		],
		locales: themeLocales,
		contributors: false,
		lastUpdated: false
	}),

	bundler: viteBundler(),

	head: [
		[ 'link', { rel: 'apple-touch-icon', sizes: "180x180", href: '/assets/favicon/apple-touch-icon.png' } ],
		[ 'link', { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/assets/favicon/favicon-16x16.png' } ],
		[ 'link', { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/assets/favicon/favicon-32x32.png' } ],
		[ 'link', { rel: 'icon', type: 'image/png', sizes: "192x192", href: '/assets/favicon/android-chrome-192x192.png' } ],
		[ 'link', { rel: 'manifest', href: '/assets/favicon/manifest.json' } ],
		[ 'link', { rel: 'mask-icon', color: '#2E3440', href: '/assets/favicon/safari-pinned-tab.svg' } ],
		[ 'link', { rel: 'shortcut icon', href: '/assets/favicon/favicon.ico' } ],
		[ 'link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' } ],
		[ 'meta', { name: 'msapplication-TileColor', content: '#2E3440' } ],
		[ 'meta', { name: 'msapplication-TileImage', content: '/assets/favicon/mstile-144x144.png' } ],
		[ 'meta', { name: 'msapplication-config', content: '/assets/favicon/browserconfig.xml' } ],
		[ 'meta', { name: 'theme-color', content: '#2E3440' } ],
		[ 'script', { type: 'text/javascript', src: '//cdn.thisiswaldo.com/static/js/8406.js' } ]
	],

	shouldPrefetch: true,
};
