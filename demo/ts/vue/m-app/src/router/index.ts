import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/index',
    component: () => import('../views/Index.vue'),
    meta: {
      isNeedLogin: true
    },
    children: [{
      path: '/index/home',
      component: () => import('../views/Home.vue'),
      meta: {
        title: '小米书城'
      }
    }, {
      path: '/index/my_books',
      component: () => import('../views/MyBooks.vue'),
      meta: {
        title: '我的书包'
      }
    }, {
      path: '/index/me',
      component: () => import('../views/Me.vue'),
      meta: {
        title: '个人中心'
      }
    }]
  },
  {
    path: '/hello',
    component: () => import('../views/Hello.vue')
  },
  {
    path: '/test',
    component: () => import('../views/Test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  store.commit({ type: 'setState', key: 'title', value: to.meta.title })
  if (to.matched[0].meta.isNeedLogin) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
})


export default router
