// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/animations.css'],
  ssr: false, // Ensure full Static Site Generation (Client Side Rendering only)
  nitro: {
    preset: 'github-pages'
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo/logo_512.png' }
      ]
    }
  }
})