import { createStore } from "vuex";
import cart from "./modules/cart";
import catalog from "./modules/catalog";

export default createStore({
  modules: {
    cart,
    catalog,
  },
});
