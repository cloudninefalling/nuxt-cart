<template>
  <div class="cart__total">
    <p class="cart__total-title">Итого</p>
    <div class="cart__total-dashboard">
      <p class="cart__total-text">Сумма заказа</p>
      <p class="cart__total-text cart__total-text_margin-left-auto">
        {{ total.toLocaleString("ru-RU") }} ₽
      </p>
      <p class="cart__total-text">Количество</p>
      <p class="cart__total-text cart__total-text_margin-left-auto">
        {{ count.toLocaleString("ru-RU") }} шт
      </p>
      <p class="cart__total-text">Установка</p>
      <p class="cart__total-text cart__total-text_margin-left-auto">
        {{ isSetupNeeded ? "Да" : "Нет" }}
      </p>
    </div>
    <div class="cart__total-summary">
      <p class="cart__total-text cart__total-text_size_lg cart__total-item_area_text">
        Стоимость товаров
      </p>
      <p class="cart__total-text cart__total-text_size_xl cart__total-item_area_value">
        {{ total.toLocaleString("ru-RU") }} ₽
      </p>
      <button :class="{ 'cart__total-button_disabled': isLoading }" type="button"
        class="cart__total-button cart__total-item_area_button" @click="checkout">
        Оформить заказ
      </button>
      <button :class="{ 'cart__total-button_disabled': isLoading }" type="button"
        class="cart__total-button cart__total-button_inverted cart__total-item_area_button-secondary" @click="checkout">
        Купить в 1 клик
      </button>
    </div>
  </div>
</template>

<style scoped>
.cart__total {
  grid-area: total;
  border-radius: 5px;
  background-color: #f6f8fa;
  display: flex;
  flex-direction: column;
  padding: 35px 30px;
  box-sizing: border-box;
  margin-top: -16px;
  margin-bottom: auto;
  width: min-content;
}

.cart__total-title {
  font-weight: 600;
  font-size: 24px;
  line-height: 121%;
  margin-bottom: 31px;
}

.cart__total-dashboard {
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 17px;
  border-bottom: 1px solid #aeb0b6;
  padding-bottom: 29px;
}

.cart__total-text {
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  width: max-content;
}

.cart__total-text_margin-left-auto {
  margin-left: auto;
  text-align: right;
  font-family: var(--second-family);
  font-weight: 400;
}

.cart__total-summary {
  display: grid;
  grid-template-areas:
    "name value"
    "button button"
    "button-secondary button-secondary";
  margin-top: 10px;
}

.cart__total-text_size_lg {
  font-weight: 600;
  font-size: 18px;
  line-height: 145%;
  margin-block: auto;
}

.cart__total-text_size_xl {
  font-weight: 700;
  font-size: 26px;
  line-height: 130%;
  letter-spacing: 0.01em;
  margin-left: auto;
}

.cart__total-item_area_text {
  grid-area: name;
}

.cart__total-item_area_button {
  grid-area: button;
  margin-top: 30px;
}

.cart__total-item_area_button-secondary {
  grid-area: button-secondary;
  margin-top: 10px;
}

.cart__total-button {
  --color-primary: #0069b4;
  --color-secondary: #fff;

  font-weight: 600;
  font-size: 18px;
  line-height: 145%;
  width: max-content;

  background-color: var(--color-primary);
  color: var(--color-secondary);

  padding: 14px 0;
  width: 365px;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;

  transition: opacity 0.2s ease;
  cursor: pointer;
}

.cart__total-button:hover {
  opacity: 0.7;
}

.cart__total-button_inverted {
  color: var(--color-primary);
  background-color: var(--color-secondary);
  border: 1px solid #0069b4;
}

.cart__total-button_disabled {
  background-color: #aeb0b6;
  color: #fff;
  pointer-events: none;
  border: none;
}
</style>

<script setup>
import store from '~/store/store';

const isSetupNeeded = computed(() => store.getters["cart/isSetupNeeded"]);
const cartInfo = computed(() => store.state.cart);
const count = computed(() => store.getters["cart/cartCount"]);
const total = computed(() => store.getters["cart/cartTotal"]);

const isLoading = ref(false);

// const { mutate } = useMutation({
//   mutationFn: (data) =>
//     axios.post("https://jsonplaceholder.typicode.com/posts", data),
//   onMutate: () => {
//     isLoading.value = true;
//   },
//   onSuccess: (res) => {
//     let string = ""
//     let total = 0;
//     res.data.items.forEach((item, i) => {
//       string += `${i + 1}: ${item.name} - ${item.amount} шт. - ${item.price * item.amount} руб. \n`;
//       total += item.price * item.amount;
//     });
//     alert(`Успех! \n${string} \nУстановка: ${res.data.isSetupNeeded ? "Да" : "Нет"} \n\nИтого: ${total} руб.`);
//     isLoading.value = false;
//   },
// });

const checkout = () => {
  alert("checkout!")
};
</script>
