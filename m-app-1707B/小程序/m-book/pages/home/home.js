// pages/home/home.js
let common = require('../../utils/common.js')
let { host } = getApp().globalData
let isImageLoad = false
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
    bannerList: [
      {
        id: 0,
        imgUrl: '/images/banner01.jpg'
      },
      {
        id: 1,
        imgUrl: '/images/banner02.jpg'
      },
      {
        id: 2,
        imgUrl: '/images/banner03.jpg'
      }
    ],
    swiperHeight: 150,
    count: 0,
    navList: [],
    currentId: 0,
    currentList: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLoad(e) {
      if (!isImageLoad) {
        let { width, height } = e.detail
        let { screenWidth } = wx.getSystemInfoSync()
        let swiperHeight = height / width * screenWidth
        this.setData({
          swiperHeight
        })
        isImageLoad = true
      }
    },
    handleAdd() {
      let { count } = this.data
      count++
      this.setData({
        count
      })
    },
    handleSub() {
      let { count } = this.data
      count--
      this.setData({
        count
      })
    },
    handleNav(e) {
      let { id } = e.detail
      this.setData({
        currentId: id,
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
            wx.hideLoading()
          }
        }
      })
    },
    onShow() {
      console.log('onShow')
    }
  },

  lifetimes: {
    ready: function() {
      console.log('ready')
    }
  },

  pageLifetimes: {
    show: function() {
      let { currentId } = this.data
      wx.request({
        url: host + '/api/nav',
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
        url: `${host}/api/list?id=${currentId}`,
        success: res => {
          if (res.data.code === 200) {
            this.setData({
              currentList: res.data.data
            })
            wx.hideLoading()
          }
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

      wx.setNavigationBarTitle({
        title: '小米书城',
      })
    }
  }
})
