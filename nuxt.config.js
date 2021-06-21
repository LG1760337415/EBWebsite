export default {
  head: {
    title: '京西商城',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'text/html;charset=utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // css: ['~/assets/main.css','~/static/style/base.css'],
  plugins: [
  ],
  components: true,

  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  build: {
    extractCSS: true

  },
  // css:[
  //   '/style/main.css'
  // ]
  server:{
    timing: {
      total: true
    }
  },
  vue:{
    config:{
      devtools:true
    }
  }
}
