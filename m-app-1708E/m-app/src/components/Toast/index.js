import Vue from 'vue'
import Toast from './Toast'

const ToastConstructor = Vue.extend(Toast)

const toast = (options) => {
  let instance = new ToastConstructor({data: options}).$mount()
  document.body.appendChild(instance.$el)
}

export default toast