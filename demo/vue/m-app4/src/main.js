import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Avue from '@smallwei/avue';
import MyPlugin from './MyPlugin'
import '@smallwei/avue/lib/index.css';

Vue.config.productionTip = false

Vue.use(Avue)
Vue.use(MyPlugin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
