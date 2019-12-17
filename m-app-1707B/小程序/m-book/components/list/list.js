// components/list/list.js
let { host } = getApp().globalData
Component({
  options: {
    styleIsolation: 'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    currentList: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    visible: false,
    item: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleShowDialog(e) {
      let { item } = e.mark
      item.count = 1
      this.setData({
        visible: true,
        item
      })
    },
    handleHideDialog() {
      this.setData({
        visible: false
      })
    },
    handleAddToMyBook() {
      let { item } = this.data
      wx.request({
        url: host + '/api/add',
        data: {
          book: item
        },  
        method: 'post',
        success: (res) => {

        }
      })
      this.handleHideDialog()
    },
    handleAdd() {
      let { item } = this.data
      item.count++
      this.setData({
        item
      })
    },
    handleSub() {
      let { item } = this.data
      if (item.count > 1) {
        item.count--
        this.setData({
          item
        })
      }
    }
  }
})
