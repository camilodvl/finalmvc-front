<template>
    <div class="container d-flex justify-content-center">
        <h1>Lista de programas ofrecidos</h1>
    </div>

    <div class="container container d-flex justify-content-around">
        <router-link :to="('/programs/create')"><button class="btn btn-primary">Agregar Programa</button></router-link>
        <router-link :to="('/programs/addcourse')"><button class="btn btn-primary">Agregar Curso a al
                programa</button></router-link>
    </div>

    <br>
    <div class="container">
        <div class="row">
            <div class="col-12 " v-for="programa in programas">
                <div class="jumbotron">
                    <h1 class="display-4">{{ programa.name }}</h1>
                    <hr class="my-4">
                    <p>Conoce mas información sobre el programa de {{ programa.name }} consultando la malla curricular
                    </p>
                    <p class="lead">
                        <router-link :to="('/programs/addcourse')"><button class="btn btn-primary">Malla Curricular</button></router-link>
                    </p>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import axios from 'axios';

export default {

    data() {
        return {
            programas: []
        }
    },

    created() {
        fetch('http://127.0.0.1:8000/api/program')
            .then(response => response.json())
            .then((data) => (this.programas = data))
    },
    methods: {
        deleteCourse(id) {
            axios.delete("http://127.0.0.1:8000/api/course/" + id + "/destroy").then(id => console.log(location.reload()));

        }
    }
}
</script>