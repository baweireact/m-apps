import Vue from 'vue'
import Toast from './Toast'
const ToastConstructor = Vue.extend(Toast) 

const toast = (options) => {
  let toastInstance = new ToastConstructor({data: options}).$mount()
  document.body.appendChild(toastInstance.$el)
}

export default toast