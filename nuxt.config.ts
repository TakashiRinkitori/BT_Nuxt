// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  target: 'static',  // Sử dụng SSG
  generate: {
    routes: ['/bt_nuxt/bai5/1', '/bt_nuxt/bai5/2']  
  },
  
});
