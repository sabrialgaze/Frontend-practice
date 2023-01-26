import { createStore } from 'vuex'
import cartModule from './cart';
import productsModule from './products';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart: cartModule,
    products: productsModule,
  }
})
