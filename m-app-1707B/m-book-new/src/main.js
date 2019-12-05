import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyload from 'vue-lazyload'
import ElementUI from 'element-ui'
import Alert from './components/Alert/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import './font/iconfont.css'
import './index.css'
import loading from './images/loading.gif'

Vue.use(ElementUI)

Vue.use(lazyload, {
  // loading: loading
})

Vue.config.productionTip = false

Vue.prototype.$MyAlert = Alert  //挂载到全局，各个组件都可以使用

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
