import { createRouter, createWebHistory } from 'vue-router'

import UserList from '../views/UserList'
import UserNew from '../views/UserNew'
import UserDetails from '../views/UserDetails'
import UserEdit from '../views/UserEdit'

const routes = [
  {path: '/', component: UserList},
  {path: '/newuser', component: UserNew},
  {path: '/user/:id/details', component: UserDetails},
  {path: '/user/:id/edit', component: UserEdit},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
