// pages/my-book/my-book.js
let { host } = getApp().globalData
let common = require('../../utils/common.js')

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
    checkedAll: false
  },

  observers: {
    'myBook': function(myBook) {
      let totalPrice = 0, totalCount = 0
      myBook.forEach(item => {
        totalPrice += item.price * item.count
        totalCount += item.count
      })
      this.setData({
        totalCount,
        totalPrice,
        checkedAll: myBook.every(item => item.checked)
      })
      this.handleSetTabbarBadge(myBook.length)
      wx.request({
        url: `${host}/api/update`,
        data: {
          myBookNew: myBook
        },
        method:'post',
        success: res => {
          
        }
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
    handleDelete(e) {
      let { myBook } = this.data
      let { index } = e.mark
      myBook.splice(index, 1)
      this.setData({
        myBook
      })
    },
    handleDeleteChecked(e) {
      let { myBook } = this.data
      let { index } = e.mark
      if (myBook.filter(item => item.checked).length === 0) {
        wx.showToast({
          icon: 'none',
          title: '请选择要删除的商品',
          mask: true
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '你确定要删除选择的商品吗？',
          success: (res) => {
            if (res.confirm) {
              myBook = myBook.filter(item => !item.checked)
              this.setData({
                myBook
              })
            }
          }
        })
      }

    },
    handleCheck(e) {
      let { myBook } = this.data
      let { index } = e.mark
      myBook.forEach(item => {
        item.checked = e.detail.value.findIndex(id => id == item.id) >= 0
      })
      this.setData({
        myBook
      })
    },
    handleCheckAll(e) {
      let { myBook } = this.data
      let { index } = e.mark
      myBook.forEach(item => {
        item.checked = e.detail.value.length > 0
      })
      this.setData({
        myBook
      })
    }
  },

  pageLifetimes: {
    show() {
      wx.request({
        url: `${host}/api/my_book`,
        success: res => {
          if (res.data.code === 200) {
            this.setData({
              myBook: res.data.data
            })
          }
        }
      })
    }
  }
})
