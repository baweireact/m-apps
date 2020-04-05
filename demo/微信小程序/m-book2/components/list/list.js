// components/list/list.js
let isImgLoad = false
let topArr = []
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array,
    currentIdForScroll: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

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
    }
  },

  lifetimes: {
    ready() {
    }
  }
})
