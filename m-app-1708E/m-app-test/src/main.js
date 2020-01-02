import Vue from 'vue'
import lazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import './font/iconfont.css'
import './index.css'
import img from './images/loading.png'

Vue.config.productionTip = false

Vue.use(lazyload, {
  loading: img
})

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
