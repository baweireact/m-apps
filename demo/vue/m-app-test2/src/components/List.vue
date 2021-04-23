<template>
  <div class="m-list" @scroll="handleScroll">
    <div v-for="category in list" :key="category.id" :id="category.id" class="js-category">
      <div class="m-category">{{category.title}}</div>
      <div v-for="book in category.list" :key="book.id" class="m-list-item">
        <div class="m-list-img-wrap">
          <img :src="book.avatar" :alt="book.title" class="m-list-img">
        </div>
        <div class="m-list-info">
          <div>{{book.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let topArr = []

export default {
  computed: {
    list() {
      return this.$store.state.list
    }
  },
  methods: {
    handleScroll(e) {
      let { scrollTop } = e.target
      scrollTop = scrollTop + 40
      if (this.$store.state.isRealScroll) {
        for (let i = 0; i < topArr.length - 1; i++) {
          if (topArr[i] < scrollTop && scrollTop < topArr[i + 1]) {
            this.$store.commit({ type: 'setState', key: 'currentId', value: i })
          }
        }
      }
    }
  },
  updated() {
    topArr = Array.from(document.getElementsByClassName('js-category')).map(item => item.offsetTop)
    topArr.push(Infinity)
  }
}
</script>

<style>

</style>