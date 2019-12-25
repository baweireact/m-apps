// pages/me/me.js
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
    navList: [
      {
        id: 0,
        title: '动画'
      },
      {
        id: 1,
        title: '音乐'
      },
      {
        id: 2,
        title: '舞蹈'
      },
      {
        id: 3,
        title: '科技'
      },
      {
        id: 4,
        title: '生活'
      },
      {
        id: 5,
        title: '时尚'
      },
      {
        id: 6,
        title: '娱乐'
      },
      {
        id: 7,
        title: '番剧'
      },
      {
        id: 8,
        title: '国创'
      },
      {
        id: 9,
        title: '游戏'
      },
    ],
    currentId: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleNav(e) {
      let { id } = e.mark
      this.setData({
        currentId:id
      })
    }
  }
})
