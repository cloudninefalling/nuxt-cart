<template>
  <ul class="cart__list">
    <li class="cart__list-item" v-for="item in items" :key="item.name">
      <img class="cart__list-image" :src="item.image" alt="item.name" />
      <p class="cart__list-name">{{ item.name }}</p>

      <p class="cart__list-specs">{{ item.specs.reduce((acc, cur, i) => {
      if (i < item.specs.length - 1) { return acc + cur + " / " } else { return acc + cur }
    }, ""
    ).replace(/м3/g, "м³") }}</p>

          <p class="cart__list-item-article">артикул: {{ item.article }}</p>
          <ItemCounter :item="item" />
          <p class="cart__list-item-price">{{ (item.price * item.amount).toLocaleString("ru-RU") }}&#8381;</p>
          <button class="cart__list-item-remove" type="button" @click="remove(item)"></button>
    </li>
  </ul>
</template>

<style scoped>
.cart__list {
  grid-area: items;

  display: flex;
  flex-direction: column;
  gap: 25px;

  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 22px;
}

.cart__list-item {
  display: grid;
  grid-template-areas:
    "image name . . remove"
    "image specs counter price ."
    "image article counter . .";
  border-bottom: 1px solid #C4C4C4;
  grid-template-columns: min-content minmax(min-content, 270px) 2fr 1fr min-content;
  grid-template-rows: min-content auto 1fr;
}

.cart__list-item:last-of-type {
  border-bottom: none;
}

.cart__list-image {
  grid-area: image;
  width: 100px;
  aspect-ratio: 1;
  margin-left: 15px;
  object-fit: contain;
  margin-right: 31px;
  margin-bottom: 20px;
}

.cart__list-name {
  grid-area: name;
  font-weight: 600;
  font-size: 16px;
  line-height: 145%;
  margin-top: 4px;
  margin-bottom: 4px;
}

.cart__list-specs {
  grid-area: specs;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #2c3242;
  margin-right: 10px;
  margin-bottom: 6px;
}

.cart__list-item-article {
  grid-area: article;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #797b86;
  text-transform: capitalize;
}

.cart__list-item-price {
  grid-area: price;
  font-weight: 500;
  font-size: 18px;
  line-height: 145%;
  text-align: center;
  font-family: var(--second-family);
  margin-block: auto
}

.cart__list-item-remove {
  grid-area: remove;

  background: url(~/assets/remove-button.svg) no-repeat center;
  background-size: contain;
  border: none;

  width: 14px;
  height: 14px;
  margin: 0 5px;

  cursor: pointer;
  transition: opacity 0.2s ease;
  padding: 0;
}

.cart__list-item-remove:hover {
  opacity: 0.8;
}
</style>

<script setup>
import store from '~/store/store';

const items = computed(() => store.getters["cart/items"]);
const remove = (item) => { store.commit('cart/removeFromCart', item) }

</script>