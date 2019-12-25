// pages/detail/detail.js
let { host } = getApp().globalData

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    detail: { count: 1}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleAdd() {
      let { detail } = this.data
      detail.count++
      this.setData({
        detail
      })
    },
    handleSub() {
      let { detail } = this.data
      if (detail.count > 1) {
        detail.count--
        this.setData({
          detail
        })
      }
    },
    handleInput(e) {
      let { detail } = this.data
      detail.count = e.detail.value.replace(/[^\d]/g, '') * 1
      this.setData({
        detail
      })
    },
    handleAddToMyBook() {
      let { detail } = this.data
      detail.checked = true
      wx.request({
        url: `${host}/api/add`,
        data: {
          book: detail
        },
        method:'post',
        success: res => {
          if (res.data.code === 200) {
            // wx.navigateBack({
              
            // })
            wx.switchTab({
              url: '/pages/my-book/my-book',
            })
          }
        }
      })
    },
    onLoad(options) {
      let { id } = options
      wx.showLoading({
        title: '加载中...',
      })
      wx.request({
        url: `${host}/api/detail?id=${id}`,
        success: res => {
          if (res.data.code === 200) {
            let detail = res.data.data
            detail.count = 1
            this.setData({
              detail
            })
            wx.hideLoading()
          }
        }
      })
    }
  },

  pageLifetimes: {
    show() {
      console.log('详情show')
    }
  }
})
