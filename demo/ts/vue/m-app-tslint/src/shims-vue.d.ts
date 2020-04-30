declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// declare module 'vue/types/vue' {
//   import VueRouter, { Route } from 'vue-router'
//   interface Vue {
//     $router: VueRouter
//   }
// }

// 声明全局方法
declare module 'vue/types/vue' {
  import VueRouter, {Route} from 'vue-router'
  interface Vue {
    $message: any;
    // $i18n: VueI18n;
    $router: VueRouter;
    $route: Route;
  }
}