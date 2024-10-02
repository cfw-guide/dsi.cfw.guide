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
    root: i18n.en_US
  },
  themeConfig: {
    outline: {
      level: 'deep'
    },
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
    'de_DE/**',
    'es_ES/**',
    'fr_FR/**',
    'hu_HU/**',
    'it_IT/**',
    'ja_JP/**',
    'pl_PL/**',
    'ro_RO/**',
    'zh_CN/**'
  ]
})
