<template>
  <div>
    <div v-for="item in currentList" :key="item.id">
      <div>
        {{item.title}},<button @click="handleDetail(item.id)">详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentList() {
      return this.$store.state.currentList
    }
  },
  methods: {
    handleDetail(id) {
      this.$router.push(`/index/detail/${id}`)
    }
  }
}
</script>

<style>

</style>