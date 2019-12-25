module.exports = Behavior({
  methods: {
    handleSetTabbarBadge(text) {
      if (text > 0) {
        wx.setTabBarBadge({
          index: 1,
          text: text + '',
        })
      } else {
        wx.removeTabBarBadge({
          index: 1,
        })
      }
    }
  }
})