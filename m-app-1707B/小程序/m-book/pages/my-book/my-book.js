// pages/my-book/my-book.js
let common = require('../../utils/common.js')
let { host } = getApp().globalData
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
    myBook: [],
    totalPrice: '',
    totalCount: '',
    checkAll: false
  },

  observers: {
    'myBook': function (myBook) {
      this.handleSetTabbarBadge(myBook.length)
      let totalPrice = 0, totalCount = 0
      myBook.filter(item => item.checked).forEach(item => {
        totalPrice += item.price * item.count
        totalCount += item.count
      })
      this.setData({
        totalPrice,
        totalCount,
        checkAll: myBook.every(item => item.checked)
      })
      wx.request({
        url: `${host}/api/update`,
        data: {
          myBookNew: myBook
        },
        method: 'post',
        success: res => {
          
        }
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleDelete(e) {
      let { myBook } = this.data
      let { index } = e.mark
      myBook.splice(index, 1)
      this.setData({
        myBook
      })
    },
    handleAdd(e) {
      let { myBook } = this.data
      let { index } = e.mark
      myBook[index].count++
      this.setData({
        myBook
      })
    },
    handleSub(e) {
      let { myBook } = this.data
      let { index } = e.mark
      if (myBook[index].count > 1) {
        myBook[index].count--
        this.setData({
          myBook
        })
      }
    },
    handleInput(e) {
      let { myBook } = this.data
      let { index } = e.target.dataset
      myBook[index].count = e.detail.value.replace(/[^\d]/g, '') * 1
      this.setData({
        myBook
      })
    },
    handleCheckItem(e) {
      let { value } = e.detail
      let { myBook } = this.data
      myBook.forEach(item => {
        item.checked = value.findIndex(id => id == item.id) >= 0
      })
      this.setData({
        myBook
      })
    },
    handleCheckAll(e) {
      let { value } = e.detail
      let { myBook } = this.data
      myBook.forEach(item => {
        item.checked = value.length > 0
      })
      this.setData({
        myBook,
        checkAll: value.length > 0
      })
    },
    handleDeleteChecked() {
      let { myBook } = this.data
      if (myBook.filter(item => item.checked).length === 0) {
        wx.showToast({
          title: '请选择要删除的商品',
          icon: 'none',
          mask: true
        })
        return
      }
      wx.showModal({
        title: '删除',
        content: '你确定要删除选中的商品吗？',
        success: res => {
          if (res.confirm) {
            this.setData({
              myBook: myBook.filter(item => !item.checked)
            })
          }
        }
      })
    }
  },

  pageLifetimes: {
    show() {
      wx.showLoading({
        title: '加载中...',
      })
      wx.request({
        url: `${host}/api/my_book`,
        success: res => {
          if (res.data.code === 200) {
            this.setData({
              myBook: res.data.data
            })
            this.handleSetTabbarBadge(res.data.data.length)
            wx.hideLoading()
          }
        }
      })
      wx.setNavigationBarTitle({
        title: '书包',
      })
    }
  }
})
