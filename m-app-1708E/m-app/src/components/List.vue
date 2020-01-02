<template>
  <div>
    <div v-for="item in currentList" :key="item.id" class="m-list-item">
      <div class="m-list-img-wrap">
        <img v-lazy="item.avatar" class="m-list-img" />
      </div>
      <div class="m-list-info">
        {{item.title}}
        <Stars :count="item.stars"></Stars>
        <button @click="handleDetail(item.id)">详情</button>
        <button v-if="item.is_in_my_book">已收藏</button>
        <button v-else @click="handleAdd(item)">收藏</button>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../api'
import Stars from './Stars'

export default {
  computed: {
    currentList() {
      return this.$store.state.currentList
    }
  },
  components: {
    Stars
  },
  methods: {
    handleDetail(id) {
      this.$router.push(`/detail/${id}`)
    },
    handleAdd(item) {
      item.count = 1
      item.checked = true
      Api.add({ item }).then(res => {
        if (res.code === 200) {
          this.$store.dispatch({ type: 'getCurrentList' })
        }
      })
    }
  }
}
</script>

<style>

</style>