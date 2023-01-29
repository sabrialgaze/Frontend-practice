<template>
  <NavBarLinks/>
  <CartList v-show="isCartOpen"/>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
// import NavBar from "./components/NavBar.vue";
import NavBarLinks from "./components/NavBarLinks.vue";
// import { Link } from "./interfaces/link";
import CartList from "./components/CartList.vue";
import { useCart } from "./composables/useCart";

export default defineComponent({
  name: "AppComponent",
  components: {
    // NavBar,
    NavBarLinks,
    CartList,
  },
  setup() {
    const {isCartOpen} = useCart();

    // onMounted(() => {
    //   console.log('onMounted')
    // })

    return {
      isCartOpen
    };
  },
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
