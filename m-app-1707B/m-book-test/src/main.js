import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Lazyload from 'vue-lazyload'
import './font/iconfont.css'
import './index.css'
import loading from './images/loading.gif'

Vue.config.productionTip = false

Vue.use(Lazyload, {
  //loading: loading
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
