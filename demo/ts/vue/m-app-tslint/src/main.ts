import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLoadload from 'vue-lazyload'
import loading from './images/loading.png'
import './utils/vue-class-component'
import './font/iconfont.css'
import './index.css'

Vue.config.productionTip = false

Vue.use(VueLoadload, {
  loading: loading
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
