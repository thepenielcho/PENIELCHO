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
      { name: 'apple-mobile-web-app-status-bar-style', content:'black-translucent'},

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
          'peniel archive'
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
        content: 'peniel archive'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon_files.png' }
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
    { src: '~/node_modules/tw-elements', mode: 'client' },
    '@/plugins/jsonld.js',
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
    '@nuxt/image',
    // 나중에 시간 되면 img 태그들 nuxt-img나 nuxt-picture로 교체하자!
    // https://image.nuxtjs.org/getting-started/installation
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-content-git',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxt/image',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = 'eval-source-map'
      }
      // splitChunks 설정이 존재하는지 확인 후 maxSize 설정
      if (config.optimization && config.optimization.splitChunks) {
        config.optimization.splitChunks.maxSize = 244 * 1024
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: undefined,
        cacheGroups: {},
        maxSize: 244 * 1024
      }
    },
    quiet: true,
    analyze: true,
  },

  // 개발 모드에서 더 자세한 로그를 보기 위한 설정
  cli: {
    badgeMessages: ['Environment: <%= options.env %>'],
    bannerColor: 'blue'
  },

  pwa: {
    meta: {
      name: 'Peniel Cho',
      description: 'peniel archive', 
      theme_color: '#F1F3F4',
      lang: 'ko',
      ogHost: 'https://penielcho.com',
      ogImage: 'https://raw.githubusercontent.com/thepenielcho/PENIELCHO/main/static/OpenGraph.png',
      twitterCard: 'summary_large_image',
      twitterSite: '@penielcho',
      twitterCreator: '@penielcho',
      twitterImage: 'https://raw.githubusercontent.com/thepenielcho/PENIELCHO/main/static/OpenGraph.png',
      appleStatusBarStyle: 'black-translucent',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black-translucent',
    },
    manifest: {
      name: 'Peniel Cho',
      short_name: 'Peniel Cho',
      description: 'peniel archive',
      lang: 'ko',
      theme_color: '#F1F3F4',
      background_color: '#F1F3F4',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/favicon_files.png',  // static 폴더에 있는 아이콘 이미지 경로
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    workbox: {
      offline: true,
      runtimeCaching: [
        {
          urlPattern: "/*",
          handler: "networkFirst",
          method: "GET",
        },
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {
            cacheName: 'google-fonts-webfonts',
            cacheExpiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
          },
        },
        {
          urlPattern: 'https://fonts.gstatic.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {
            cacheName: 'google-fonts-webfonts',
            cacheExpiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
          },
        },
      ]
    },
  }
}
