<template>
    <div class="container">
        <h1>Registrar Curso</h1>
    <form method="POST" v-on:submit.prevent="createCourse()">
  <div class="form-group">
    <label for="name">Nombre</label>
    <input type="text" class="form-control" id="name" placeholder="Ingrese nombre del curso" v-model="formData.name" required="true">
  </div>

  <div class="form-group">
    <label for="credits">Creditos</label>
    <input type="number" class="form-control" id="credits" placeholder="Ingrese cantidad de creditos" v-model="formData.credits" required="true">
  </div>

  <div class="form-group">
    <label for="teacher">Profesor</label>
    <input type="text" class="form-control" id="teacher" placeholder="Ingrese nombre del profesor" v-model="formData.teacher" required="true">
  </div>

  <div class="form-group">
    <label for="pre">Pre-requisito</label>
    <input type="text" class="form-control" id="pre" placeholder="Ingrese el pre requisito" v-model="formData.pre_requisite" required="true">
  </div>

  <div class="form-group">
    <label for="ah">Horas Autonomas</label>
    <input type="number" class="form-control" id="ah" placeholder="Ingrese la cantidad de horas autonomas" v-model="formData.a_hours" required="true">
  </div>

  <div class="form-group">
    <label for="dh">Horas Dirigidas</label>
    <input type="number" class="form-control" id="dh" placeholder="Ingrese la cantidad de horas dirigidas" v-model="formData.d_hours" required="true">
  </div>



  <input type="submit" class="btn btn-primary" value="Crear">
</form>
    </div>
   
</template>

<script>
import axios from 'axios';

export default{
    name: 'CreateCourse',
    data(){
        return{
            formData:{
                name: '',
                credits: '',
                pre_requisite: '',
                teacher: '',
                a_hours: '',
                d_hours: ''
            }
        }
    },
    methods: {
        createCourse(){
            axios.post('http://localhost:8000/api/course', this.formData)
            .catch(error => {console.log(error.response)});
            alert("Curso creado");
            this.$router.push('/courses');
        }
    }
}

</script>