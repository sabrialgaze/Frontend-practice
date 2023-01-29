<template>
    <div>
        <NavBarLinks/>
    </div>
    <div v-if="user">
        <h1>Name: {{ user.name }}</h1>
        <h2>Email: {{ user.email }}</h2>
        <img :src="user.avatar" alt="" />
  </div>
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import fakeShopApi from "../api/fakeShopApi"
import { User } from "../models/user";
import { AxiosResponse } from "axios";
import { useStore } from "vuex";

export default defineComponent({
    props: {
        id : {
            type: Number,
            required: true
        },
        //userRole: String

    },
    setup(props) {
        const store = useStore();
        store.state;
        let user = ref<User>();
        fakeShopApi.get<unknown, AxiosResponse<User>>(`/users/1`).then(resp => {
            user.value = resp.data
        });
        return { user };
    },
})
</script>

