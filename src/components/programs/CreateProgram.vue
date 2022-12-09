<template>
    <div class="container">
        <h1>Registrar programa</h1>
        <form method="POST" v-on:submit.prevent="createProgram()">
            <div class="form-group">
                <label for="name">Nombre</label>
                <input type="text" class="form-control" id="name" placeholder="Ingrese nombre del Programa"
                    v-model="formData.name" required="true">
            </div>


            <input type="submit" class="btn btn-primary" value="Crear">
        </form>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'CreateProgram',
    data() {
        return {
            formData: {
                name: ''
            }
        }
    },
    methods: {
        createProgram() {
            axios.post('http://localhost:8000/api/program', this.formData)
                .catch(error => { console.log(error.response) });
            alert("Programa creado");
            this.$router.push('/');
        }
    }
}

</script>