// pages/home/home.js
let common = require('../../utils/common')
let { host } = getApp().globalData
console.log(host)
let isImgLoad = false

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [common],
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperList: [
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
    list: [],
    currentIdForSelected: 0,
    currentIdForScroll: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImgLoad(e) {
      if (!isImgLoad) {
        isImgLoad = true
        let { width, height } = e.detail
        let { screenWidth  } = wx.getSystemInfoSync() 
        let swiperHeight = height / width * screenWidth
        this.setData({
          swiperHeight
        })
      }
    },

    handleSidebar(e) {
      let { id } = e.detail
      this.setData({
        currentIdForSelected: id,
        currentIdForScroll: id
      })
    },

    handleList(e) {
      let { id } = e.detail
      this.setData({
        currentIdForSelected: id
      })
    }
  },

  pageLifetimes: {
    show() {
      wx.request({
        url: `${host}/api/list`,
        success: (res) => {
          if (res.data.code === 200) {
            this.setData({
              list: res.data.data
            })
          }
        }
      })

      wx.request({
        url: `${host}/api/my_books`,
        success: (res) => {
          if (res.data.code === 200) {
            this.handleBadge(res.data.data)
          }
        }
      })

      wx.setNavigationBarTitle({
        title: '小米书城',
      })
    }
  }
})
