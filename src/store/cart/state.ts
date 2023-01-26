import { Product } from "@/models/product";

export interface ICartSate {
    products: Product[];
    isOpen: boolean;
}

function state(): any {
    return {
        products: [],
        isOpen: false,
    }
}

export default state;