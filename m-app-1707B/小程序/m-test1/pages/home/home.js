// pages/home/home.js
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
    bannerList: [{
      id: 0,
      url: '/images/banner01.jpg'
    }, {
      id: 1,
      url: '/images/banner02.jpg'
    }, {
      id: 2,
      url: '/images/banner03.jpg'
    }],
    swiperHeight: 150,
    navList: [],
    currentId: 0,
    currentList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLoad(e) {
      let { width, height } = e.detail
      let { screenWidth } = wx.getSystemInfoSync()
      // swiper的高度 / 屏幕的宽度 =  图片的高度 / 图片的宽度
      let swiperHeight = height / width * screenWidth
      this.setData({
        swiperHeight
      })
    },
    handleNav(e) {
      let { id } = e.detail
      this.setData({
        currentId: id
      })
      wx.showLoading({
        title: '加载中...',
      })
      wx.request({
        url: `${host}/api/list?id=${id}`,
        success: res => {
          if (res.data.code === 200) {
            this.setData({
              currentList: res.data.data
            })
          }
          wx.hideLoading()
        }
      })
    }
  },

  lifetimes: {
    ready() {
      console.log('ready')
    }
  },

  pageLifetimes: {
    show() {
      console.log('show')
      wx.request({
        url: `${host}/api/nav`,
        success: res => {
          if (res.data.code === 200) {
            this.setData({
              navList: res.data.data
            })
          }
        }
      })
      wx.showLoading({
        title: '加载中...',
      })
      wx.request({
        url: `${host}/api/list?id=0`,
        success: res => {
          if (res.data.code === 200) {
            this.setData({
              currentList: res.data.data
            })
          }
          wx.hideLoading()
        }
      })

      wx.request({
        url: `${host}/api/my_book`,
        success: res => {
          if (res.data.code === 200) {
            this.handleSetTabbarBadge(res.data.data.length)
          }
        }
      })
    }
  }
})
