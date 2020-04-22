import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store'

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/index',
        component: () => import('../views/Index.vue')
    },
    {
        path: '/hello',
        component: () => import('../views/Hello.vue')
    },
    {
        path: '/test',
        component: () => import('../views/Test.vue')
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    store.commit({ type: 'setState', key: 'title', value: to.meta.title })
    next()
})


export default router;
//# sourceMappingURL=index.js.map