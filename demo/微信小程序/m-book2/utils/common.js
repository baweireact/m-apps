module.exports = Behavior({
  methods: {
    handleBadge(myBooks) {
      let count = myBooks.reduce((total, item) => {
        return total + item.count
      }, 0)
      if (count > 0) {
        wx.setTabBarBadge({
          index: 1,
          text: count + '',
        })
      } else {
        wx.removeTabBarBadge({
          index: 1,
        })
      }
    }
  }
})