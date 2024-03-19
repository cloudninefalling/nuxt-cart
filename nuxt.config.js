// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/nuxt-cart/",
    buildAssetsDir: "assets",
  },
  devtools: { enabled: true },
  modules: ["nuxt-swiper"],
});
