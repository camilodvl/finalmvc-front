<template>
    <div class="container">
        <h1>Agregar un curso a un programa programa</h1>
        <form method="POST" v-on:submit.prevent="addCourseToProgram()">

            <div class="form-group">
                <label for="programa">Programa </label>
                <select class="form-control" id="programa" v-model="formData.program_id" required="true">
                    <template v-for="programa in programas">
                        <option v-bind:value="programa.id">{{ programa.name }}</option>
                    </template>

                </select>
            </div>

            <div class="form-group">
                <label for="curso"> Curso que se va a agregar al programa </label>
                <select class="form-control" id="curso" v-model="formData.course_id" required="true">
                    <template v-for="curso in cursos">
                        <option v-bind:value="curso.id">{{ curso.name }}</option>
                    </template>

                </select>
            </div>

            <div class="form-group">
                <label for="semestre">En que semestre se va a agregar el curso</label>
                <input type="number" class="form-control" id="semestre" 
                    placeholder="Semestre" v-model="formData.semester" required="true">
            </div>

            <input type="submit" class="btn btn-primary" value="Crear">
        </form>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'AddCourseToProgram',
    data() {
        return {
            formData: {
                name: ''
            },
            programas: [],
            cursos: []
        }
    },


    created() {
        fetch('http://127.0.0.1:8000/api/course')
            .then(response => response.json())
            .then((data) => (this.cursos = data))

        fetch('http://127.0.0.1:8000/api/program')
            .then(response => response.json())
            .then((data) => (this.programas = data))
    },

    methods: {

        addCourseToProgram() {
            axios.post('http://127.0.0.1:8000/api/courseprogram', this.formData)
                .catch(error => { console.log(error.response) });
            alert("Programa creado");
            this.$router.push('/');
        }
    }
}

</script>