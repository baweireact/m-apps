import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
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
    children: [{
      path: '/index/home',
      component: () => import('../views/Home.vue'),
      meta: {
        title: '小米书城'
      }
    }, {
      path: '/index/my_book',
      component: () => import('../views/MyBook.vue'),
      meta: {
        title: '书包'
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
    path:  '/test',
    component: () => import('../views/Test.vue')
  },
  {
    path:  '/table_test',
    component: () => import('../views/TableTest.vue')
  },
  {
    path:  '/form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/antd_table',
    component: () => import('../views/AntdTable.vue')
  },
  {
    path: '/father',
    component: () => import('../views/Father.vue')
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
