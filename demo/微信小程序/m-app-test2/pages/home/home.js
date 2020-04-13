// pages/home/home.js
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
    bannerList: [
      {
        id: 0,
        url: '/images/banner01.jpg'
      },
      {
        id: 1,
        url: '/images/banner02.jpg'
      },
      {
        id: 2,
        url: '/images/banner03.jpg'
      },
    ],
    swiperHeight: 150,
    list: [],
    currentId: 0,
    idForScroll: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLoad(e) {
      //研究一下，这个函数走了三遍，如何让他走一遍
      let { width, height } = e.detail
      let { screenWidth } = wx.getSystemInfoSync()
      let swiperHeight = height / width * screenWidth
      this.setData({
        swiperHeight
      })
    },
    handleNav(e) {
      let { id } = e.detail
      this.setData({
        currentId: id,
        idForScroll: id
      })
    }
  },
  pageLifetimes: {
    show() {
      console.log(1)
      wx.request({
        url: 'http://localhost:3000/api/list',
        success: res => {
          if (res.data.code === 200) {
            this.setData({
              list: res.data.data
            })
          }
        }
      })
    }
  }
})
