// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Cinzel+Decorative": [400],
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
