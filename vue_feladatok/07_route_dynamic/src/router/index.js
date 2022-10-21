import { createRouter, createWebHistory } from 'vue-router'
import BookList from '../views/BookList'
import OneBook from '../views/OneBook'
import Error404 from '../views/Error404'

const routes = [
  {path: '/', component:BookList },
  {path: '/:id(\\d+)', component:OneBook},
  {path: '/:pathMatch(.*)*', component: Error404, alias:'/error404'}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
