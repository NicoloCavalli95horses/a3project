import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Config from '../views/Config.vue'
import Gulpease from '../views/Gulpease.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/config',
    name: 'Config',
    component: Config
  },
  {
    path: '/gulpease',
    name: 'Gulpease',
    component: Gulpease
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
