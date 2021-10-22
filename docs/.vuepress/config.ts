import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

import { i18n, themeConfig } from "./i18n";

export default defineUserConfig<DefaultThemeOptions>({
	base: "/dsi.cfw.guide/",

	plugins: [
		[
			"vuepress-plugin-redirect",
			{
				// provide i18n redirection
				// it will automatically redirect `/foo/bar/` to `/:locale/foo/bar/` if exists
				locales: true,
			},
		],
		[
			"@vuepress/plugin-search",
			{
				locales: {
					"/en_US/": {
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
					}
				}
			}
		]
	],

	locales: {
		// The key is the path for the locale to be nested under.
		// As a special case, the default locale can use "/" as its path.
		"/en_US/": {
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
		}
	},

	themeConfig: {
		repo: "cfw-guide/dsi.cfw.guide",

		locales: {
			"/en_US/": themeConfig.en_US,
			"/es_ES/": themeConfig.es_ES,
			"/fr_FR/": themeConfig.fr_FR,
			"/hu_HU/": themeConfig.hu_HU,
			"/it_IT/": themeConfig.it_IT,
			"/pl_PL/": themeConfig.pl_PL,
			"/zh_CN/": themeConfig.zh_CN
		}
	}
});
