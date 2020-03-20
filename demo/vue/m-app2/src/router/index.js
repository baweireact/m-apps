import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Index from '../views/Index'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/Login')
  },
  {
    path: '/index',
    component: Index,
    children: [{
      path: '/index/home',
      component: () => import('../views/Home'),
      meta: {
        title: '小米书城'
      }
    }, {
      path: '/index/my_book',
      component: () => import('../views/MyBook'),
      meta: {
        title: '我的书包'
      }
    }, {
      path: '/index/me',
      component: () => import('../views/Me'),
      meta: {
        title: '个人中心'
      }
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  store.commit({ type: 'setState', key: 'title', value: to.meta.title })
  next()
})

export default router
