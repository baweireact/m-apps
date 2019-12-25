// components/list/list.js
let common = require('../../utils/common.js')
let { host } = getApp().globalData
Component({
  behaviors: [common],
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
      item.checked = true
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
          if (res.data.code === 200) {
            this.handleSetTabbarBadge(res.data.data.length)
          }
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
    },
    handleInput(e) {
      let { item } = this.data
      item.count = e.detail.value.replace(/[^\d]/g, '') - 0
      this.setData({
        item
      })
    },
    handleDetail(e) {
      let { id } = e.mark
      wx.navigateTo({
        url: `/pages/detail/detail?id=${id}`,
      })
    }
  }
})
