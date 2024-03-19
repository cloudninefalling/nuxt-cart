<template>
  <section class="viewed-items">
    <h2 class="viewed-items__title">Просмотренные товары</h2>
    <div class="viewed-items__controller">
      <button type="button" class="viewed-items__button viewed-items__button_left" @click="prevSlide"></button>
      <span class="viewed-items__text viewed-items__text_accent">
        {{ currentSlide }}
        <span class="viewed-items__text"> / {{ numOfSlides }}</span>
      </span>
      <button type="button" class="viewed-items__button viewed-items__button_right" @click="nextSlide"></button>
    </div>
    <div class="viewed-items__swiper">
      <Swiper :space-between="20" :slides-per-view="4" :allowTouchMove="false" @swiper="onSwiper"
        @transition-start="currentSlide = Math.ceil(swiperElement.realIndex / slidesPerView) + 1">
        <SwiperSlide v-for="item in items" :key="item.name">
          <Slide :item="item" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style>
.viewed-items {
  display: grid;
  grid-template-areas:
    "title controller"
    "swiper swiper";
  grid-template-columns: 1fr max-content;
  row-gap: 42px;
}

.viewed-items__title {
  grid-area: title;
  font-weight: 600;
  font-size: 30px;
  line-height: 121%;
}

.viewed-items__controller {
  grid-area: controller;
  display: flex;
  gap: 15px;
  align-items: center;
}

.viewed-items__button {
  width: 50px;
  height: 50px;
  border: none;
  padding: 0;
  background: none;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;

  cursor: pointer;
  transition: opacity 0.2s ease;
}

.viewed-items__button:hover {
  opacity: 0.8;
}

.viewed-items__button_left {
  background-image: url("~/assets/button-left.svg");
}

.viewed-items__button_right {
  background-image: url("~/assets/button-right.svg");
}

.viewed-items__text {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  color: #797b86;
}

.viewed-items__text_accent {
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #212121;
  margin-left: 5px;
}


.viewed-items__swiper {
  grid-area: swiper;
  min-width: 0;
}
</style>

<script setup>
import store from "~/store/store";


const items = computed(() => store.state.catalog)

const swiperElement = ref(null)
const numOfSlides = ref(1)
const currentSlide = ref(1)
const slidesPerView = 4;

const onSwiper = (swiper) => {
  swiperElement.value = swiper
  console.log(swiper)
  numOfSlides.value = Math.ceil(swiper.slides.length / slidesPerView)
}

const nextSlide = () => {
  for (let i = 0; i < slidesPerView; i++) {
    swiperElement.value.slideNext()
  }
}

const prevSlide = () => {
  for (let i = 0; i < slidesPerView; i++) {
    swiperElement.value.slidePrev()
  }
}
</script>