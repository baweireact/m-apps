import Vue from 'vue'
import 'xe-utils'
import Antd from 'ant-design-vue'
import VXETable from 'vxe-table'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vxe-table/lib/style.css'
import 'ant-design-vue/dist/antd.css'
import './font/iconfont.css'
import './index.css'

Vue.use(Antd)
Vue.use(VXETable)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
