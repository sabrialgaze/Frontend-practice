<template>
    <div v-if="!isLoading">
        <h1>{{ product?.title }}</h1>
        <img :src="product?.images" alt="">
        <h2>{{ product?.price }}</h2>
        <h3>{{ product?.description }}</h3>
        <!-- <h2>Role: {{ userRole }}</h2 -->

        <button @click="addElementToCart(product)" class="btn btn-success">"Add to Cart"</button>
    </div>
    <div v-else>Loading...</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useCart } from '../composables/useCart';
import useProducts from '@/composables/useProducts';

export default defineComponent({
    props: {
        id : {
            type: Number,
            required: true
        },
        // userRole: String

    },
    setup(props) {
        const {addElementToCart} = useCart();
        const { product, fetchProductById, isLoading } = useProducts();
        fetchProductById(props.id);
        return {
            product, 
            addElementToCart,
            isLoading
        };
    },
})
</script>