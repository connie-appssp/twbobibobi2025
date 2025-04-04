export default {
    content: [
      // './app.vue',
      './pages/**/*.vue',
      // './components/**/*.vue',
      './layouts/**/*.vue',
      // './plugins/**/*.js',
      // './nuxt.config.ts',
      './assets/css/plugins/dataTables.tailwindcss.css'
    ],
    theme: {
      extend: {
        fontFamily: {
          custom: ['CustomFont', 'sans-serif']
        }
      }
    },
    plugins: [],
  };