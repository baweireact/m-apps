// components/list/list.js
let common = require('../../utils/common')
let { host } = getApp().globalData

let isImgLoad = false
let topArr = []
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [ common ],
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    list: Array,
    currentIdForScroll: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    visible: false,
    book: {count: 1}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleScroll(e) {
      let { scrollTop } = e.detail
      scrollTop += topArr[0] + 1
      for (let i = 0; i < topArr.length - 1; i++) {
        if (topArr[i] <= scrollTop && scrollTop < topArr[i + 1]) {
          this.triggerEvent('onList', { id: i })
        }
      }
    },
    handleImgLoad() {
      if (!isImgLoad) {
        const query = this.createSelectorQuery();
        query.selectAll('.js-category').boundingClientRect((res) => {
          topArr = res.map(item => item.top)
          topArr.push(Infinity)
        }).exec()
        isImgLoad = true
      }
    },
    handleShowDialog(e) {
      let { book } = e.mark
      book.count = 1
      this.setData({
        visible: true,
        book
      })
    },
    handleCancel() {
      this.setData({
        visible: false
      })
    },
    handleOk() {
      let { book } = this.data
      wx.request({
        url: `${host}/api/my_books`,
        data: {book},
        method: 'post',
        success: (res) => {
          if (res.data.code === 200) {
            this.handleCancel()
            this.handleBadge(res.data.data)
          }
        },
      })
    },
    handleAdd() {
      let { book } = this.data
      book.count++
      this.setData({
        book
      })
    },
    handleSub() {
      let { book } = this.data
      if (book.count > 1) {
        book.count--
        this.setData({
          book
        })
      }
    },
    handleInput(e) {
      console.log(e)
      let { book } = this.data
      let count = e.detail.value.replace(/[^\d]/g, '') - 0
      if (count === 0) {
        count = 1
      }
      book.count = count
      this.setData({
        book
      })
    },
    handleDetail(e) {
      let { id } = e.mark
      wx.navigateTo({
        url: `/pages/detail/detail?id=${id}`,
      })
    }
  },

  lifetimes: {
    ready() {
    }
  }
})
