const { i18n, themeConfig } = require("./i18n");
const container = require('markdown-it-container');
const path = require("path");

themeConfig.translate.selectLanguageName = "Translate";

module.exports = {
	theme: path.resolve(__dirname, "./vuepress-theme"),

	plugins: [
		[
			"@vuepress/plugin-search",
			{
				locales: {
					"/": {
						placeholder: i18n.en_US.search
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
					"/pl_PL/": {
						placeholder: i18n.pl_PL.search
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
		[ 'meta', { name: 'msapplication-TileColor', content: '#2E3440' } ],
		[ 'meta', { name: 'msapplication-TileImage', content: '/assets/favicon/mstile-144x144.png' } ],
		[ 'meta', { name: 'msapplication-config', content: '/assets/favicon/browserconfig.xml' } ],
		[ 'meta', { name: 'theme-color', content: '#2E3440' } ],
		[ 'script', { src: 'https://cdn.thisiswaldo.com/static/js/8532.js' } ],
		[ 'script', {}, 'if (localStorage.getItem("vuepress-color-scheme") === "dark" || (localStorage.getItem("vuepress-color-scheme") !== "light" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches))) document.documentElement.classList.add("dark");' ],
	],
	locales: {
		// The key is the path for the locale to be nested under.
		// As a special case, the default locale can use "/" as its path.
		"/": {
			lang: "en-US", // this will be set as the lang attribute on <html>
			title: i18n.en_US.title,
			description: i18n.en_US.description
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
		"/pl_PL/": {
			lang: "pl-PL",
			title: i18n.pl_PL.title,
			description: i18n.pl_PL.description
		},
		"/zh_CN/": {
			lang: "zh-CN",
			title: i18n.zh_CN.title,
			description: i18n.zh_CN.description
		},
		"/translate/": {
			lang: "en",
			title: "Translating DSi Guide",
			description: "Crowdin In-Context for dsi.cfw.guide",
			head: [
				[ 'script', {}, "var _jipt=[];_jipt.push(['project','dsi-guide']);_jipt.push(['escape',function(){window.location.href='https://dsi.cfw.guide'}]);" ],
				[ 'script', {src: "//cdn.crowdin.com/jipt/jipt.js"} ]
			],
		}
	},

	themeConfig: {
		repo: "cfw-guide/dsi.cfw.guide",
		docsDir: "docs",
		selectLanguageText: "",
		adTagOne: 'waldo-tag-8548',
		adTagTwo: 'waldo-tag-8549',
		locales: {
			"/": themeConfig.en_US,
			"/es_ES/": themeConfig.es_ES,
			"/fr_FR/": themeConfig.fr_FR,
			"/hu_HU/": themeConfig.hu_HU,
			"/it_IT/": themeConfig.it_IT,
			"/pl_PL/": themeConfig.pl_PL,
			"/zh_CN/": themeConfig.zh_CN,
			"/translate/": themeConfig.translate
		}
	},

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
