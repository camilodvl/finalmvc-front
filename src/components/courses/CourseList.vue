<template>

    <div class="container-fluid">
      <h1 class="container d-flex justify-content-center">Cursos</h1>
      <div class="container container d-flex justify-content-center">
         <router-link :to="('/courses/create')"><button class="btn btn-primary">Agregar Curso</button></router-link>
      </div>
    
            
    
        <div>
            <table class="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Creditos</th>
          <th scope="col">Pre-requisito</th>
          <th scope="col">Profesor</th>
          <th scope="col">Horas Autonomas</th>
          <th scope="col">Horas Dirigidas</th>
          <th scope="col">Eliminar</th>
          <th scope="col">Editar</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="curso in cursos">
          <td>{{curso.name}}</td>
          <td>{{curso.credits}}</td>
          <td>{{curso.pre_requisite}}</td>
          <td>{{curso.teacher}}</td>
          <td>{{curso.a_hours}}</td>
          <td>{{curso.d_hours}}</td>
          <td><button class="btn btn-danger" v-on:click="deleteCourse(curso.id)"><i class="fa-solid fa-trash"></i></button></td>
          <td><router-link :to="('/courses/edit/'+curso.id)"><i class="fa-solid fa-pen-to-square" style="color: darkgoldenrod"></i></router-link></td>
        </tr>
      </tbody>
    </table>
        </div>
    
    </div>
        
    </template>
    
    <script>
    import axios from 'axios';
    
    export default{
    
        data(){
            return{
                cursos: []
            }
        },
    
        created(){
              fetch('http://127.0.0.1:8000/api/course')
            .then(response => response.json())
            .then((data)=> (this.cursos = data))
        },
        methods:{
            deleteCourse(id){
                axios.delete("http://127.0.0.1:8000/api/course/"+id+"/destroy").then(id=>console.log(location.reload()));
                
            }
        }
    }
    </script>