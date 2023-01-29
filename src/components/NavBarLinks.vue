<template>
    <nav>
        <ul>
            <li>
                <router-link :to="{name: 'products'}">Products</router-link>
            </li>
            <li>
                <router-link :to="{name: 'profile'}">Profile</router-link>
            </li>

        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
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