<template>
  <div class="cart__option">
    <input type="checkbox" class="cart__option-checkbox" aria-label="Установка" v-model="isSetupNeeded"
      @change="toggleIsSetupNeeded" />

    <img class="cart__option-image" src="~/assets/option-image.svg" alt="Установка" />
    <div class="cart__option-text-container">
      <p class="cart__option-title">Установка</p>
      <p class="cart__option-subtitle">
        Отметьте, если Вам необходима консультация профессионала по монтажу
        выбранных товаров.
      </p>
    </div>
  </div>
</template>

<style scoped>
.cart__option {
  grid-area: option;
  background: #f6f8fa;
  display: flex;
  gap: 20px;
  padding: 28px 35px 28px 25px;
  border-radius: 5px;
  margin-top: auto;
  align-items: center;
}

.cart__option-checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 0;
  box-sizing: border-box;
}

.cart__option-image {
  object-fit: scale-down;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 4px;
}

.cart__option-text-container {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: max-content;
}

.cart__option-title {
  font-weight: 600;
  font-size: 16px;
  line-height: 145%;
  margin-bottom: 2px;
  text-align: start;
}

.cart__option-subtitle {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #797b86;
}
</style>

<script setup>
import store from '~/store/store';

const isSetupNeeded = store.getters["cart/isSetupNeeded"];

const toggleIsSetupNeeded = () => {
  store.commit("cart/toggleIsSetupNeeded");
};
</script>
