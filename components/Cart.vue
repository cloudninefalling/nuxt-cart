<template>
  <section class="cart">
    <div class="cart__heading">
      <h2 class="cart__heading-title">Ваша корзина</h2>
      <p class="cart__heading-subtitle">{{ count }} {{ grammarCheck }}</p>
      <button @click="clear" class="cart__heading-button-clear">
        Очистить корзину
      </button>
    </div>
    <CartList />
    <CartOption />
    <CartTotal />
  </section>
</template>

<style scoped>
.cart {
  display: grid;
  grid-template-areas:
    "heading ."
    "items total"
    "option total";
  column-gap: 55px;
  margin-top: 60px;
}

.cart__heading {
  grid-area: heading;
  display: flex;
  gap: 22px;
  align-items: baseline;
  margin-bottom: 50px;
}

.cart__heading-title {
  font-weight: 700;
  font-size: 44px;
  line-height: 121%;
  margin: 0;
}

.cart__heading-subtitle {
  font-weight: 400;
  font-size: 18px;
  line-height: 145%;
  color: #797b86;
}

.cart__heading-button-clear {
  background: none;
  border: none;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-align: right;
  color: #797b86;

  margin-left: auto;
  padding: 0;

  cursor: pointer;
  transition: opacity 0.2s ease;
}

.cart__heading-button-clear:hover {
  opacity: 0.8;
}
</style>

<script setup>
import store from '~/store/store';

const count = computed(() => store.getters["cart/cartCount"]);
const clear = () => {
  store.commit("cart/clearCart");
};

const grammarCheck = computed(() => {
  if ((count.value >= 5 && count.value <= 20) || count.value % 10 === 0)
    return "товаров";
  if (count.value % 10 === 1) return "товар";
  if (count.value % 10 >= 5) return "товаров";
  return "товара";
});
</script>
