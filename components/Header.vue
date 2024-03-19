<template>
  <header class="header">
    <div class="header__cart">
      <div class="header__cart-image"></div>
      <p class="header__cart-title">Ваша корзина</p>
      <p class="header__cart-text header__cart-text_grey">{{ count }} {{ grammarCheck }}</p>
      <p class="header__cart-text">{{ price.toLocaleString("ru-Ru") }} ₽</p>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
}

.header__cart {
  display: grid;
  grid-template-areas:
    "image title"
    "image text-grey"
    "image text";
  margin: 64px 0 56px;
  column-gap: 10px;
}

.header__cart-image {
  grid-area: image;

  width: 32px;
  height: 32px;
  background-image: url("../assets/cart-image.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-block: auto;
}

.header__cart-title {
  grid-area: title;

  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  margin-bottom: -4px;
}

.header__cart-text {
  grid-area: text;

  font-weight: 400;
  font-size: 12px;
  line-height: 145%;
}

.header__cart-text_grey {
  grid-area: text-grey;

  color: #797b86;
}
</style>

<script setup>
import store from '~/store/store';

const price = computed(() => store.getters["cart/cartTotal"]);
const count = computed(() => store.getters["cart/cartCount"]);

const grammarCheck = computed(() => {
  if (count.value >= 5 && count.value <= 20 || count.value % 10 === 0) return 'товаров';
  if (count.value % 10 === 1) return 'товар';
  if (count.value % 10 >= 5) return 'товаров';
  else return 'товара';
})
</script>