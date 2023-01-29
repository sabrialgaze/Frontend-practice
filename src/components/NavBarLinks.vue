<template>
    <nav>
        <ul>
            <li>
                <router-link :to="{name: 'products'}">Products</router-link>
            </li>
            <li>
                <router-link :to="{name: 'profile'}">Profile</router-link>
            </li>
            <div class="cart-button">
                <button @click="toggleCart" class="btn btn-secondary">Cart</button>
            </div>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCart } from "../composables/useCart";

export default defineComponent({
    setup() {
        const {toggleCart} = useCart();
        return {toggleCart}
    },
})
</script>


<style scoped>
nav {
    min-height: 100px;
    background-color: rgb(200, 86, 74);
}

ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

.cart-button {
    padding: 2rem;
    justify-content: center;
    /* float: right; */
}

li {
    padding: 2rem;
    font-weight: bold;
}

a {
    color: whitesmoke;
    text-decoration: none;   

}

a:visited {
    color: white
}
</style>