import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import People from '../views/People'
import Contact from '../views/Contact'
import PeopleDetails from '../views/PeopleDetails'

const routes = [
  {path: '/', component: Home},
  {path: '/emberek', component: People},
  {path: '/keszitette', component: Contact},
  {path: '/emberek/:id(\\d+)', component: PeopleDetails}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
