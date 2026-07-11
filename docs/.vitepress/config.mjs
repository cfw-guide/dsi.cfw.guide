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
  sitemap: {
    hostname: 'https://dsi.cfw.guide'
  },
  locales: {
    id_ID: i18n.id_ID,
    de_DE: i18n.de_DE,
    root: i18n.en_US,
    es_ES: i18n.es_ES,
    fr_FR: i18n.fr_FR,
    it_IT: i18n.it_IT,
    hu_HU: i18n.hu_HU,
    pl_PL: i18n.pl_PL,
    pt_BR: i18n.pt_BR,
    el_GR: i18n.el_GR,
    uk_UA: i18n.uk_UA,
    zh_CN: i18n.zh_CN,
    zh_TW: i18n.zh_TW,
    ja_JP: i18n.ja_JP,
    ko_KR: i18n.ko_KR
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
  }
})
