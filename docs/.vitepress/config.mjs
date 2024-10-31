import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

import container from 'markdown-it-container'

import * as i18n from './i18n'

export default defineConfig({
  title: "DSi Guide",
  description: "The complete guide to modding your Nintendo DSi",
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon/favicon.ico' }],
    [ 'script', { type: 'text/javascript', src: '//cdn.thisiswaldo.com/static/js/8406.js' } ],
  ],
  locales: {
    root: i18n.en_US,
    de_DE: i18n.de_DE,
    el_GR: i18n.el_GR,
    es_ES: i18n.es_ES,
    fr_FR: i18n.fr_FR,
    hu_HU: i18n.hu_HU,
    it_IT: i18n.it_IT,
    ja_JP: i18n.ja_JP,
    uk_UA: i18n.uk_UA
  },
  themeConfig: {
    docFooter: {
      prev: false,
      next: false
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/fCzqcWteC4' },
      { icon: 'github', link: 'https://github.com/cfw-guide/dsi.cfw.guide' },
    ],
		adUnits: [
			"8408",
			"8442"
		]
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPHero.vue', import.meta.url)
          )
        }
      ]
    }
  },
  markdown: {
    config: (md) => {
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
            let tokenData = token.info.match(/^ ?tab\s(default\s)?(.*)$/);
            let isDefault = typeof tokenData[1] !== 'undefined';
            let name = tokenData[2];
            return `<Tab name="${name}" ${isDefault ? "default=true" : ""}>`;
          } else {
            return `</Tab>\n`;
          }
        }
      });
    }
  },
  srcExclude: [
    'pl_PL/**',
    'ro_RO/**',
    'zh_CN/**'
  ]
})
