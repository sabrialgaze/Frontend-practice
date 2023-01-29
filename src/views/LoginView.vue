<template>
    <div class="login">
        <h1 class="text-center">Login</h1>
        <h3>Welcome back! Login with your credentials</h3>
        <form>
            <div class="form-group">
                <label class="form-label" for="email">Email address</label>
                <input class="form-control" type="email" placeholder="email@example.com" v-model="email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" required>
            </div>
            <div class="form-group">
                <label class="form-label" for="password">Password</label>
                <input class="form-control" type="password" placeholder="Enter your password" v-model="password" required>
            </div>
            <div class="form-group form-check">
                <input class="form-check-input" type="checkbox" id="check">
                <label class="form-check-label" for="check">Remember me</label>
            </div>
            <button type="submit" class="btn btn-succes w-100" @click.prevent="login(email, password)">
                <span>LOG IN</span>            
            </button>   
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.login {
    width: 360px;
    height: min-content;
    padding: 20px;
    border-radius: 12px;
    background: whitesmoke;
}

.login h1 {
    font-size: 36px;
    margin-bottom: 25px;
}

.login form {
    font-size: 20px;
}

.login form .form-group {
    margin-bottom: 12px;
}

.login form input[type="submit"] {
    font-size: 20px;
    margin-top: 15px;
}

</style>
