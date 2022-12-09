<template>
    <div class="container">
        <h1>Editar Curso</h1>

        <form method="POST" v-on:submit.prevent="updateCourse()">
            <div class="form-group">
                <label for="name">Nombre</label>
                <input type="text" class="form-control" id="name" placeholder="Ingrese nombre del curso"
                    v-model="curso.name" required="true">
            </div>

            <div class="form-group">
                <label for="credits">Creditos</label>
                <input type="number" class="form-control" id="credits" placeholder="Ingrese cantidad de creditos"
                    v-model="curso.credits" required="true">
            </div>

            <div class="form-group">
                <label for="teacher">Profesor</label>
                <input type="text" class="form-control" id="teacher" placeholder="Ingrese nombre del profesor"
                    v-model="curso.teacher" required="true">
            </div>

            <div class="form-group">
                <label for="pre">Pre-requisito</label>
                <input type="text" class="form-control" id="pre" placeholder="Ingrese el pre requisito"
                    v-model="curso.pre_requisite" required="true">
            </div>

            <div class="form-group">
                <label for="ah">Horas Autonomas</label>
                <input type="number" class="form-control" id="ah" placeholder="Ingrese la cantidad de horas autonomas"
                    v-model="curso.a_hours" required="true">
            </div>

            <div class="form-group">
                <label for="dh">Horas Dirigidas</label>
                <input type="number" class="form-control" id="dh" placeholder="Ingrese la cantidad de horas dirigidas"
                    v-model="curso.d_hours" required="true">
            </div>



            <input type="submit" class="btn btn-primary" value="Actualizar">
        </form>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'EditCategory',
    data() {
        return {
            id: this.$route.params.id,
            curso: [],
        }
    },

    created() {
        fetch('http://localhost:8000/api/course/' + this.id)
            .then(response => response.json())
            .then((data) => (this.curso = data))
            .catch()
    },

    methods: {
        updateCourse() {
            axios.put('http://localhost:8000/api/course/' + this.id + '/update', this.curso)
                .catch(error => console.log(error.response));
            alert("Curso actualizada")
            this.$router.push('/courses')
        },


    }
}

</script>