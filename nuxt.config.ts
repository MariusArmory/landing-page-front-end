// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    title: 'Marius Armory',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
  },
  plugins: ['~/plugins/fontawesome.js'],
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Cinzel+Decorative": [400],
      "Montserrat": [200, 400],
    },
    display: "swap",
    download: true,
    base64: true,
    inject: true,
    overwrite: false,
    stylepath: 'assets/css/fonts.css',
    prefetch: false,
    preconnect: true,
    preload: false,
    usestylesheet: false,
  },

})
