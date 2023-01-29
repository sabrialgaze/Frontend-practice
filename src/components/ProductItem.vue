<template>
    <div class="product-item">
        <div class="product-img">
            <img :src="product.category.image" :alt="product.title">
        </div>
        <div class="product-info">
            <div class="product-title"> {{ product.title }}</div>
            <div class="product-price"> {{ product.price }}€</div>
            <div class="buttons">
                <button class="btn btn-sm btn-primary" @click="$emit('addCart', product)">Add to Cart</button>
                <button class="btn btn-sm btn-success" @click="$emit('goDetail', product)">Detail</button>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '../models/product'

export default defineComponent({
   props: {
    product: {
        type: Object as PropType<Product>,
            required: true,
    },
   },
});
</script>

<style scoped>

.product-item {
    width: 300px;
    display: flex;
    border: 1px solid black;
}

.product-img {
    width: 50%;
}

.product-price {
    font-weight: bold;
}

.product-img > img {
    width: 100%;
    height: auto;
}
</style>
