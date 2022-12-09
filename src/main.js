import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import CourseList from '../src/components/courses/CourseList.vue'
import CreateCourse from '../src/components/courses/CreateCourse.vue'
import EditCourse from '../src/components/courses/EditCourse.vue'
import ProgramList from '../src/components/programs/ProgramList.vue'
import CreateProgram from '../src/components/programs/CreateProgram.vue'
import AddCourseToProgram from '../src/components/programs/AddCourseToProgram.vue'


const routes = [
    { path: '/courses', component: CourseList },
    { path: '/courses/create', component: CreateCourse },
    { path: '/courses/edit/:id', component: EditCourse },
    { path: '/', component: ProgramList },
    { path: '/programs/create', component: CreateProgram },
    { path: '/programs/addcourse', component: AddCourseToProgram }
  ]

  //crear instancia del router
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })


createApp(App).use(router).mount('#app')