export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'vue-front-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    // proxy: true,
    // prefix: '/api/',
    // credentials: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  // proxy: {
  //   '/api/': { 
  //     target: 'https://xxxx.com',//这个网站是开源的可以请求到数据的
  //     pathRewrite: {
  //        '^/api/': '/',
  //        changeOrigin: true
  //     }    
  //   }
  // },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  }
}
