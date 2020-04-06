// pages/my-books/my-books.js
let { host } = getApp().globalData
let common = require('../../utils/common')

Component({
  behaviors: [common],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    myBooks: [],
    totalPrice: ''
  },

  observers: {
    'myBooks'(myBooks) {
      //let { myBooks } = this.data
      console.log(myBooks)
      let totalPrice = myBooks.reduce((total, item) => {
        return total + item.count * item.price
      }, 0)
      this.setData({
        totalPrice
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onShow() {
      wx.setNavigationBarTitle({
        title: '我的书包',
      })

      wx.request({
        url: `${host}/api/my_books`,
        success: res => {
          if (res.data.code === 200) {
            let myBooks = res.data.data
            this.handleBadge(myBooks)
            this.setData({
              myBooks
            })
          }
        }
      })
    }
  }
})
