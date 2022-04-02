import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/light/login/Login.vue')
  },
  {
    path: '/index/home',
    component: () => import('../views/light/index/home/Home.vue')
  },
  {
    path: '/index/draggable',
    component: () => import('../views/light/index/draggable/Draggable.vue')
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
