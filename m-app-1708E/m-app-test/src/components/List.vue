<template>
  <div>
    <div v-for="item in currentList" :key="item.id" class="m-list-item">
      <div class="m-list-img-wrap">
        <img v-lazy="item.avatar" class="m-list-img"/>
      </div>
      <div class="m-list-info">
        {{item.title}}
        <Stars :count="item.stars"></Stars>
        <button @click="handleDetail(item.id)">详情</button>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from './Stars'

export default {
  components: {
    Stars
  },
  computed: {
    currentList() {
      return this.$store.state.currentList
    }
  },
  methods: {
    handleDetail(id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style>

</style>