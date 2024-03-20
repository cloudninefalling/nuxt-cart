// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/nuxt-cart/",
    buildAssetsDir: "assets",
    head: {
      title: "Корзина",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/nuxt-cart/favicon.ico" },
      ],
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  devtools: { enabled: true },
  modules: ["nuxt-swiper"],
});
