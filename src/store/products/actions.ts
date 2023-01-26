import fakeShopApi from "@/api/fakeShopApi"
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IProductsState } from "./state";

const actions: ActionTree<IProductsState, any> = {
    async fetchProducts({commit}) {

        // usamos la mutación para poner isLoading = true
        commit('setIsLoading', true);

        // obtenemos los datos de manera asíncrona
        const {data} = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>('/products');

        // usamos la mutación para poner isLoading = false
        commit('setIsLoading', false);

        // usamos la mutación para volcar los datos obtenidos en la variable del state products
        commit('setProducts', data);
    },

    async fetchProductsById({ commit }, productId: number) {
        
        // usamos la mutación para poner isLoading = true
        commit('setIsLoading', true);

        // obtenemos los datos de manera asíncrona
        const {data} = await fakeShopApi.get<unknown, AxiosResponse<Product>>(`/products/${productId}`);

        // usamos la mutación para poner isLoading = false
        commit('setIsLoading', false);

        // usamos la mutación para volcar los datos obtenidos en la variable del state products
        commit('setSelectedProduct', data);
    }
}

export default actions;