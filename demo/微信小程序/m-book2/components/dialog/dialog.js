// components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'shared',
    multipleSlots: true
  },

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
    handleCancel() {
      this.triggerEvent('onCancel')
    },
    handleOk() {
      this.triggerEvent('onOk')
    }
  }
})
