<template>
    <div class="container">
        <h1>Login</h1>
        <form method="POST" v-on:submit.prevent="login()">
            <div class="form-group">
                <label for="name">Nombre</label>
                <input type="text" class="form-control" id="name" placeholder="Ingrese email"
                    v-model="formData.email" required="true">
            </div>
            <div class="form-group">
                <label for="pass">Nombre</label>
                <input type="password" class="form-control" id="pass" placeholder="Ingrese clave"
                    v-model="formData.password" required="true">
            </div>


            <input type="submit" class="btn btn-primary" value="Login">
        </form>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'login',
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async login(){
           const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.formData)
           }
           const response = await fetch("http://127.0.0.1:8000/api/login", options)
           const data = await response.json();
           localStorage.setItem('token-mvc', data);
           alert("Logeo exitoso")
           this.$router.push('/')
        }
    }
}

</script>