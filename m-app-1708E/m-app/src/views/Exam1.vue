<template>
  <div>
    <Swiper></Swiper>
    <NavExam1 :navList="navList" :currentId="currentId" :onNav="handleNav"></NavExam1>
  </div>
</template>

<script>
import NavExam1 from '../components/NavExam1'
import Swiper from '../components/Swiper'

export default {
  data() {
    return {
      navList: [{
        id: 0,
        title: '首发'
      }, {
        id: 1,
        title: '寻光计划'
      }],
      currentId: 0
    }
  },
  components: {
    NavExam1,
    Swiper
  },
  methods: {
    handleNav(id) {
      this.currentId = id
    }
  }
}
</script>

<style>

</style>