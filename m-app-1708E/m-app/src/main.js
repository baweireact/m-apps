import Vue from 'vue'
import lazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import toast from './components/Toast'
import 'swiper/dist/css/swiper.css'
import './font/iconfont.css'
import './index.css'
import img from './images/loading.png'

Vue.config.productionTip = false

Vue.use(lazyload, {
  loading: img
})

Vue.use(VueAwesomeSwiper)

Vue.prototype.$toast = toast

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
