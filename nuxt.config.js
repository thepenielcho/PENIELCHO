export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Peniel Cho',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Your Nearest Developer Advocate 🥑' },
      { name: 'format-detection', content: 'telephone=no' },

      {
        hid: 't-type',
        name: 'twitter:card',
        content: 'summary_large_image'
      },

      { hid: 'og:site_name', property: 'og:site_name', content: 'Peniel Cho' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://penielcho.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Peniel Cho'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Your Nearest Developer Advocate 🥑'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://raw.githubusercontent.com/thepenielcho/PENIELCHO/main/static/OpenGraph.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://raw.githubusercontent.com/thepenielcho/PENIELCHO/main/static/OpenGraph.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Peniel Cho, Your Nearest Developer Advocate 🥑'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === ".md") {
        const stats = require('reading-time')(document.text)
        document.readingStats = stats
      }
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/node_modules/tw-elements', mode: 'client'},
    { src: '~/plugins/vue-infinite-loading.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
