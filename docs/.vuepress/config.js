module.exports = {
  base: '/dsi.cfw.guide/',
  title: 'DSi Guide',
  description: 'The complete guide to modding your Nintendo DSi',

  plugins: [
    [
      'vuepress-plugin-redirect',
      {
        // provide i18n redirection
        // it will automatically redirect `/foo/bar/` to `/:locale/foo/bar/` if exists
        locales: true,
      },
    ],
  ],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en_US/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'DSi Guide',
      description: 'The complete guide to modding your Nintendo DSi'
    },
    '/es_ES/': {
      lang: 'es-ES', // this will be set as the lang attribute on <html>
      title: 'Guía de DSi',
      description: 'Una guia completa de modificar tu Nintendo DSi'
    },
    '/fr_FR/': {
      lang: 'fr-FR', // this will be set as the lang attribute on <html>
      title: 'Guide DSi',
      description: 'Le guide complet pour modder votre Nintendo DSi'
    },
    '/fr_FR/': {
      lang: 'fr-FR', // this will be set as the lang attribute on <html>
      title: 'Guide DSi',
      description: 'Le guide complet pour modder votre Nintendo DSi'
    },
    '/hu_HU/': {
      lang: 'hu-HU', // this will be set as the lang attribute on <html>
      title: 'DSi Útmutató',
      description: 'A Nintendo DSi moddolás teljes útmutatója'
    },
    '/it_IT/': {
      lang: 'it-IT', // this will be set as the lang attribute on <html>
      title: 'Guida DSi',
      description: 'La guida completa per moddare il tuo Nintendo DSi'
    },
    '/pl_PL/': {
      lang: 'pl-PL', // this will be set as the lang attribute on <html>
      title: 'Przewodnik DSi',
      description: 'Kompletny przewodnik do modyfikacji twojego Nintendo DSi'
    },
    '/zh_CN/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }
  },

  themeConfig: {
    sidebar: 'auto'
  }

}