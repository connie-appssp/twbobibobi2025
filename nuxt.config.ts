// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: '/',
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      script: [
        {
          src: '/lib/fontAwesome/js/all.min.js',
          async: true,
        }
      ],
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
      allowedHosts: [
        'twbobi2025web.southeastasia.azurecontainer.io',  // 允許來自這個主機的請求
        // 'localhost',  // 如果需要，可以將 localhost 加入白名單
        // '127.0.0.1',  // 同理，如果需要，可以加入本機 IP
      ],
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