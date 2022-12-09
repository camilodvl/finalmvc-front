<template>
    <div class="container d-flex justify-content-center">
        <h1>Malla curricular {{ programa.name }}</h1>
    </div>

    <div class="container d-flex justify-content-center">
        <div class="card" style="width: 18rem;" v-for="curso in cursos">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{curso.name}}</li>
                <li class="list-group-item">{{curso.pivot.semester}}</li>
            </ul>
        </div>
    </div>




</template>

<script>
import axios from 'axios';

export default {

    data() {
        return {
            id: this.$route.params.id,
            programa: [],
            cursos: []
        }
    },

    created() {
        fetch('http://127.0.0.1:8000/api/program/' + this.id)
            .then(response => response.json())
            .then((data) => (this.programa = data))
            .then((data) => (this.cursos = data.courses))
    }
}
</script>