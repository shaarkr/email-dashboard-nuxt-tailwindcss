// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: { shim: false },
  modules: ['@davestewart/nuxt-scrollbar', 'nuxt-icon', '@nuxtjs/device'],
  css: ['~/assets/css/main.css'],
});
