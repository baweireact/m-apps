import Vue from 'vue'
import VueRouter from 'vue-router'
import Week from '../views/Week'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/week'
  },
  {
    path: '/week',
    component: Week
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
