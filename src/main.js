import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import CourseList from '../src/components/courses/CourseList.vue'
import CreateCourse from '../src/components/courses/CreateCourse.vue'
import EditCourse from '../src/components/courses/EditCourse.vue'


const routes = [
    { path: '/courses', component: CourseList },
    { path: '/courses/create', component: CreateCourse },
    { path: '/courses/edit/:id', component: EditCourse }
  ]

  //crear instancia del router
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })


createApp(App).use(router).mount('#app')