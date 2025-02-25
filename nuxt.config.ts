// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: '/',
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ]
    }
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/global.css',
    '~/assets/css/layouts/Header.css',
    '~/assets/css/layouts/Footer.css',
    "~/assets/css/plugins/dataTables.tailwindcss.css"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    server: {
      watch: {
        usePolling: true, // 確保在某些環境（如 WSL、Docker）即時更新
      },
      hmr: {
        protocol: 'ws',
        host: 'localhost',
      },
    },
  },
})