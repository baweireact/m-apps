import Vue from 'vue'
import Alert from './Alert'

const AlertConstructor = Vue.extend(Alert)  //使用extend函数的作用就是把vue组件变成构造函数

const AlertFun = (options) => {
  let instance = new AlertConstructor({data: options}) //使用构造函数创建组件实例
  let view = instance.$mount()  //挂载后生成真实dom
  document.body.appendChild(view.$el)  //把dom添加的body里
}

export default AlertFun  //抛出函数