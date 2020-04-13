// components/sidebar/sidebar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array,
    currentId: Number
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
    handleNav(e) {
      let { id } = e.mark
      this.triggerEvent('onNav', {id})
    }
  }
})
