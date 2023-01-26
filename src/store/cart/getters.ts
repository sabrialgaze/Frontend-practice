import { GetterTree } from "vuex";
import { ICartSate } from "./state";

const getters: GetterTree<ICartSate, any> = {
    getCartElements(state){
        return state.products;
    },
    
    getIsOpen(state) {
        return state.isOpen;
    },
};

export default getters;
