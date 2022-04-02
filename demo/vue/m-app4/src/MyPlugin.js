let MyPlugin = {}
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
    console.log(666)
  }

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
    console.log(777)
  }

  Vue.prototype.$myMethodTest = {
    test: function () {
      console.log(888)
    }
  }
}

export default MyPlugin