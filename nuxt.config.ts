// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss'
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './app/components/ui'
  },
  css: ['~/assets/styles/base.scss'],
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
      apiBaseUrl: 'https://api.nuxtjs.dev',
      baseUrl: 'https://www.jiewen.run'
    }
  }
})
