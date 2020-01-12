import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home/home.vue"
import Type from "@/components/type/type.vue"
import Shopping from "@/components/shopping/shopping.vue"
import My from "@/components/my/my.vue"
import Pintuan from "@/components/home/components/pintuan.vue"
import Miaosha from "@/components/home/components/miaosha.vue"
import Detail from "@/components/detail/detail.vue";
import Goods_list from "@/components/goods/Goods_list.vue"
import Login_home from "@/components/login/home.vue"
import Yqm from "@/components/login/components/yaoqingma.vue"
import Tell from "@/components/login/components/tell.vue"
import Hyzx from "@/components/home/components/hangyezx.vue"
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: "/home"
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    }, {
        path: '/type',
        name: 'type',
        component: Type
    }, {
        path: '/shopping',
        name: 'shopping',
        component: Shopping
    }, {
        path: '/my',
        name: 'my',
        component: My
    }, {
        path: '/pintuan',
        name: 'pintuan',
        component: Pintuan
    }, {
        path: '/miaosha',
        name: 'miaosha',
        component: Miaosha
    }, {
        path: '/detail',
        name: 'detail',
        component: Detail
    }, {
        path: '/goods_list',
        name: "goods_list",
        component: Goods_list
    }, {
        path: '/login_home',
        name: "login_home",
        component: Login_home
    }, {
        path: '/yqm',
        name: "yqm",
        component: Yqm
    }, {
        path: '/tell',
        name: "tell",
        component: Tell
    }, {
        path: '/hyzx',
        name: "hyzx",
        component: Hyzx
    }]
})