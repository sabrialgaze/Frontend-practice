import { Product } from "@/models/product";
import { MutationTree } from "vuex";
import { ICartSate } from "./state";

const mutations: MutationTree<ICartSate> = {
    addElement(state, element: Product) {
        state.products.push(element);
    },
    removeElement(state, element: Product) {
        const tmp = state.products.filter((u) => u.id !== element.id)
        state.products = tmp;
    },
    toggleCart(state) {
        state.isOpen = !state.isOpen;
    }
};

export default mutations;