<template>
  <div class="slide">
    <img class="slide__image" :src="item.image" :alt="item.name" />
    <p class="slide__title">{{ item.name.replace(/[^A-Za-z0-9 ]+/g, '') }}</p>
    <p class="slide__description">{{ item.description }}</p>
    <p class="slide__price">{{ item.priceRange.rub[0].toLocaleString("ru-RU") }} ₽ – {{
      item.priceRange.rub[1].toLocaleString("ru-RU") }} ₽</p>
    <p class="slide__alt-price">{{ item.priceRange.euro[0].toFixed(2) }} € – {{ item.priceRange.euro[1].toFixed(2) }} €
    </p>
    <button type="button" class="slide__button" @click="toggleClick">{{ !isClicked ? "Подробнее" : "Скрыть" }}</button>
    <button v-show="isClicked" type="button" class="slide__button" @click="addToCart(item)">В корзину</button>
  </div>
</template>

<style scoped>
.slide {
  display: flex;
  flex-direction: column;
  padding: 25px;
  box-sizing: border-box;
  background-color: #f6f8fa;
  border-radius: 5px;
}

.slide__image {
  width: 245px;
  height: 245px;
  object-fit: contain;
}

.slide__title {
  font-weight: 700;
  font-size: 22px;
  line-height: 121%;
  margin-top: 5px;
}

.slide__description {
  font-weight: 400;
  font-size: 14px;
  line-height: 145%;
  margin-top: 10px;
  height: 60px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.slide__price {
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  letter-spacing: 0.01em;
  margin-top: 40px;
}

.slide__alt-price {
  margin-top: 3px;
  font-weight: 400;
  font-size: 16px;
  line-height: 145%;
  color: #797b86;
}

.slide__button {
  background: #0069b4;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 15px 50px;
  width: 255px;
  margin-top: 20px;

  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  color: #fff;

  cursor: pointer;
  transition: opacity 0.2s ease;
}

.slide__button:hover {
  opacity: 0.8;
}
</style>


<script setup>
import store from '~/store/store';

const isClicked = ref(false)

const toggleClick = () => { isClicked.value = !isClicked.value }


const addToCart = (item) => {
  store.commit("cart/addToCart", item);
  isClicked.value = false;
};

const props = defineProps({
  item: {
    name: String,
    specs: Array,
    price: Number,
    article: String,
    image: String,
    description: String,
    priceRange: {
      rub: [Number],
      euro: [Number],
    }
  }
})
</script>
