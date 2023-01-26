import { Module } from "vuex";
import state, { ICartSate } from "./state";
import mutations from "./mutations";
import getters from "./getters";

const cartModule: Module<ICartSate, any> = {
    namespaced: true,
    state,
    mutations,
    getters
};

export default cartModule;