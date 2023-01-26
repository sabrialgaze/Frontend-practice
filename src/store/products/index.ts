import { Module } from "vuex";
import { IProductsState } from "./state";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const productsModule: Module<IProductsState, any> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}

export default productsModule;