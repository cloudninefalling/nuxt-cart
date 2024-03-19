import imgBxc from "~/assets/BXC.png";
import imgG2h from "~/assets/G2H.png";
import imgGhn from "~/assets/GHN.png";

const cart = {
  namespaced: true,
  state: () => ({
    items: [
      {
        name: "Вытяжное устройство G2H",
        specs: [
          "12-72/168 м3/ч",
          "гидрорегулируемый расход",
          "от датчика присутствия",
        ],
        article: "G2H1065",
        price: 12644,
        image: imgG2h,
        amount: 1,
      },
      {
        name: "Вытяжное устройство BXC",
        specs: [
          "12-72/168 м3/ч",
          "гидрорегулируемый расход",
          "от датчика присутствия",
        ],
        article: "G2H1065",
        price: 12644,
        image: imgBxc,
        amount: 2,
      },
      {
        name: "Вытяжное устройство GHN",
        specs: [
          "12-72/168 м3/ч",
          "гидрорегулируемый расход",
          "от датчика присутствия",
        ],
        article: "G2H1065",
        price: 12644,
        image: imgGhn,
        amount: 1,
      },
    ],
    isSetupNeeded: false,
  }),
  getters: {
    items: (state) => {
      return state.items;
    },
    isSetupNeeded: (state) => {
      return state.isSetupNeeded;
    },
    cartTotal: (state) => {
      if (!state.items.length) return 0;
      return state.items.reduce(
        (acc, item) => acc + item.price * item.amount,
        0
      );
    },
    cartCount: (state) => {
      if (!state.items.length) return 0;
      return state.items.reduce((acc, item) => acc + item.amount, 0);
    },
  },
  mutations: {
    addToCart(state, item) {
      const existingItemIndex = state.items.findIndex(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].amount++;
      } else {
        state.items.push({ ...item, amount: 1 });
      }
    },
    removeOneFromCart(state, item) {
      if (item.amount > 1) {
        item.amount--;
        return;
      }
      state.items = state.items.filter(
        (cartItem) => cartItem.name !== item.name
      );
    },
    removeFromCart(state, item) {
      state.items = state.items.filter(
        (cartItem) => cartItem.name !== item.name
      );
    },
    clearCart(state) {
      state.items = [];
    },
    toggleIsSetupNeeded(state) {
      state.isSetupNeeded = !state.isSetupNeeded;
    },
  },
};
export default cart;
