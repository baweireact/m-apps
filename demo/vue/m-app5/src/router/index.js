import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/light/login'
  },
  {
    path: '/light/login',
    component: () => import('../views/light/login/Login.vue')
  },
  {
    path: '/light/index/home',
    component: () => import('../views/light/index/home/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
