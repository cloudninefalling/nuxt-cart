import { addComponent, defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  setup() {
    addComponent({
      name: "swiper-container",
      export: "swiper-container",
      filePath: "swiper/element/bundle",
    });
  },
});
