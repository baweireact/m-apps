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
        <button v-if="!item.is_in_my_book" @click="handleAdd(item)">收藏</button>
        <button v-else>已收藏</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
      axios({
        url: '/api/add',
        data: {
          item
        },
        method: 'post'
      }).then(res => {
        if (res.data.code === 200) {
          this.$store.dispatch({ type: 'getCurrentList' })
        }
      })
    }
  }
}
</script>

<style>

</style>