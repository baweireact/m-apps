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
    detail: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad(options) {
      console.log(options)
      let { id } = options
      wx.request({
        url: `${host}/api/detail/${id}`,
        success: res => {
          if (res.data.code === 200) {
            let detail = res.data.data
            detail.count = 1
            this.setData({
              detail
            })
            wx.setNavigationBarTitle({
              title: detail.title,
            })
          }
        }
      })
    },
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
      let count = e.detail.value.replace(/[^\d]/g, '') - 0
      if (count === 0) {
        count = 1
      }
      let { detail } = this.data
      detail.count = count
      this.setData({
        detail
      })
    },
    handleAddToMyBooks() {
      let { detail } = this.data
      wx.request({
        url: `${host}/api/my_books`,
        data: {book: detail},
        method: 'post',
        success: res => {
          if (res.data.code === 200) {
            wx.switchTab({
              url: '/pages/my-books/my-books',
            })
          }
        }
      })
    }
  }
})
