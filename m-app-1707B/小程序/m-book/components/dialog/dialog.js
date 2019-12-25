// components/dialog/dialog.js
Component({
  options: {
    styleIsolation: 'apply-shared', //isolatiion apply-shared shared
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    visible: Boolean,
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleMove(e) {
      console.log(e)
    }
  }
})
