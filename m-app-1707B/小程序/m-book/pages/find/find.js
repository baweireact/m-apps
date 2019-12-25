// pages/find/find.js
let { host } = getApp().globalData
let startX, startY
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
    videoList: [
      // `${host}/video/video1.mp4`,
      // `${host}/video/video2.mp4`,
      // `${host}/video/video3.mp4`,
      // `${host}/video/video4.mp4`
    ],
    currentIndex: 0,
    video: `/video/video1.mp4`,
    danmuList: [
      {
        text: '北京八维',
        color: '#ff0000',
        time: 1
      }
    ],
    danmu: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleInput(e) {
      this.setData({
        danmu: e.detail.value
      })
    },
    handleDanmu() {
      let { danmu } = this.data
      this.videoContext.sendDanmu({
        text: danmu,
        color: '#ff0000'
      })
      this.setData({
        danmu: ''
      })
    },
    handleTouchMove(e) {
      //console.log(e)
    },
    handleTouchStart(e) {
      let { pageX, pageY } = e.touches[0]
      startX = pageX
      startY = pageY
      console.log(startX, startY)
    },
    handleTouchEnd(e) {
      let {currentIndex, videoList} = this.data
      let { pageX, pageY } = e.changedTouches[0]
      if (pageY - startY < -100 && currentIndex < videoList.length - 1) {
        currentIndex++
        console.log("下一个")
      } else if (pageY - startY > 100 && currentIndex > 0) {
        currentIndex--
        console.log('上一个')
      }
      this.setData({
        currentIndex
      })
    },
  },

  pageLifetimes: {
    show() {
      this.videoContext = wx.createVideoContext('m-video', this)
      wx.request({
        url: `${host}/api/video`,
        success: res => {
          if (res.data.code === 200) {
            let videoList = res.data.data.map(item => `${host}${item}`)
            this.setData({
              videoList
            })
          }
        }
      })
    }
  }
})
