import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyload from 'vue-lazyload'
import './font/iconfont.css'
import './index.css'
import loading from './images/loading.gif'

Vue.use(lazyload, {
  // loading: loading
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
