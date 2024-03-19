<template>
  <div class="item-counter">
    <div class="item-counter__button-container">
      <button class="item-counter__item item-counter__button item-counter__button_bg_minus"
        @click="removeOneItem(item)"></button>
      <p class="item-counter__item">{{ item.amount }}</p>
      <button class="item-counter__item item-counter__button item-counter__button_bg_plus"
        @click="addItem(item)"></button>
    </div>
    <p :class="{ 'item-counter__subscript_transparent': item.amount < 2 }" class="item-counter__subscript">{{
          item.price.toLocaleString("ru-RU") }} ₽/шт.</p>
  </div>
</template>

<style scoped>
.item-counter {
  grid-area: counter;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
}

.item-counter__button-container {
  display: flex;
  gap: 2px;
  border-radius: 4px;
  overflow: hidden;
  height: min-content;
}


.item-counter__item {
  height: 34px;
  width: 34px;
  background-color: #f6f8fa;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 34px;
  text-align: center;
}

.item-counter__button {
  border: none;
  padding: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 10px;

  cursor: pointer;
  transition: background-color 0.2s ease;
}

.item-counter__button:hover {
  background-color: #f0f2f4;
}

.item-counter__button_bg_minus {
  background-image: url("~/assets/minus.svg");
}

.item-counter__button_bg_plus {
  background-image: url("~/assets/plus.svg");
}

.item-counter__subscript {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 145%;
  text-align: center;
  color: #1f2432;
}

.item-counter__subscript_transparent {
  color: transparent;
  pointer-events: none;
}
</style>

<script setup>
import store from "~/store/store"

defineProps({
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
});


const addItem = (item) => { store.commit('cart/addToCart', item) };
const removeOneItem = (item) => { store.commit('cart/removeOneFromCart', item) };
</script>
