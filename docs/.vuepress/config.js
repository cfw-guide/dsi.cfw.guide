const { i18n, themeConfig } = require("./i18n");
const container = require('markdown-it-container');
const path = require("path");
const { localTheme } = require('./vuepress-theme')

themeConfig.translate.selectLanguageName = "Translate";

module.exports = {
	plugins: [
		[
			"@vuepress/plugin-search",
			{
				locales: {
					"/": {
						placeholder: i18n.en_US.search
					},
					"/de_DE/": {
						placeholder: i18n.de_DE.search
					},
					"/es_ES/": {
						placeholder: i18n.es_ES.search
					},
					"/fr_FR/": {
						placeholder: i18n.fr_FR.search
					},
					"/hu_HU/": {
						placeholder: i18n.hu_HU.search
					},
					"/it_IT/": {
						placeholder: i18n.it_IT.search
					},
					"/ja_JP/": {
						placeholder: i18n.ja_JP.search
					},
					"/pl_PL/": {
						placeholder: i18n.pl_PL.search
					},
					"/ro_RO/": {
						placeholder: i18n.ro_RO.search
					},
					"/zh_CN/": {
						placeholder: i18n.zh_CN.search
					},
					"/translate/": {
						placeholder: i18n.translate.search
					}
				}
			}
		],
		[
			'@vuepress/register-components',
			{
				componentsDir: path.resolve(__dirname, './components')
			}
		]
	],

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
		[ 'script', { type: 'text/javascript', src: '//cdn.thisiswaldo.com/static/js/8406.js' } ],
		[ 'script', {}, 'if (localStorage.getItem("vuepress-color-scheme") === "dark" || (localStorage.getItem("vuepress-color-scheme") !== "light" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches))) document.documentElement.classList.add("dark");' ]
	],
	locales: {
		// The key is the path for the locale to be nested under.
		// As a special case, the default locale can use "/" as its path.
		"/": {
			lang: "en-US", // this will be set as the lang attribute on <html>
			title: i18n.en_US.title,
			description: i18n.en_US.description
		},
		"/de_DE/": {
			lang: "de-DE",
			title: i18n.de_DE.title,
			description: i18n.de_DE.description
		},
		"/es_ES/": {
			lang: "es-ES",
			title: i18n.es_ES.title,
			description: i18n.es_ES.description
		},
		"/fr_FR/": {
			lang: "fr-FR",
			title: i18n.fr_FR.title,
			description: i18n.fr_FR.description
		},
		"/hu_HU/": {
			lang: "hu-HU",
			title: i18n.hu_HU.title,
			description: i18n.hu_HU.description
		},
		"/it_IT/": {
			lang: "it-IT",
			title: i18n.it_IT.title,
			description: i18n.it_IT.description
		},
		"/ja_JP/": {
			lang: "ja-JP",
			title: i18n.ja_JP.title,
			description: i18n.ja_JP.description
		},
		"/pl_PL/": {
			lang: "pl-PL",
			title: i18n.pl_PL.title,
			description: i18n.pl_PL.description
		},
		"/ro_RO/": {
			lang: "ro-RO",
			title: i18n.ro_RO.title,
			description: i18n.ro_RO.description
		},
		"/zh_CN/": {
			lang: "zh-CN",
			title: i18n.zh_CN.title,
			description: i18n.zh_CN.description
		},
		"/translate/": {
			lang: "en",
			title: i18n.translate.title,
			description: i18n.translate.description,
			head: [
				[ 'script', {}, "var _jipt=[];_jipt.push(['project','dsi-guide']);_jipt.push(['escape',function(){window.location.href='https://dsi.cfw.guide'}]);" ],
				[ 'script', {src: "//cdn.crowdin.com/jipt/jipt.js"} ]
			],
		}
	},

	theme: localTheme({
		repo: "cfw-guide/dsi.cfw.guide",
		docsBranch: "master",
		docsDir: "docs",
		selectLanguageText: '<i class="fas fa-globe"></i>',
		adUnits: [
			"8408",
			"8442"
		],
		locales: {
			"/": themeConfig.en_US,
			"/de_DE/": themeConfig.de_DE,
			"/es_ES/": themeConfig.es_ES,
			"/fr_FR/": themeConfig.fr_FR,
			"/hu_HU/": themeConfig.hu_HU,
			"/it_IT/": themeConfig.it_IT,
			"/ja_JP/": themeConfig.ja_JP,
			"/pl_PL/": themeConfig.pl_PL,
			"/ro_RO/": themeConfig.ro_RO,
			"/zh_CN/": themeConfig.zh_CN,
			"/translate/": themeConfig.translate
		},
		contributors: false,
		lastUpdated: false
	}),

	extendsMarkdown: md => {
		md.use(container, "tabs", {
			render: (tokens, idx) => {
				const token = tokens[idx];
				if (token.nesting === 1) {
					return `<Tabs ${token.info}>\n`;
				} else {
					return `</Tabs>\n`;
				}
			}
		});
	
		md.use(container, 'tab', {
			render: (tokens, idx) => {
				const token = tokens[idx];
				if (token.nesting === 1) {
					return `<Tab ${token.info}>\n`;
				} else {
					return `</Tab>\n`;
				}
			}
		});
	}
};
