<template>
  <div class="home">
    <div>{{count.list}}</div>
    <button @click="handleAdd">加</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return {
        list: this.$store.state.count
      }
    }
  },
  methods: {
    handleAdd() {
      this.$store.commit({ type: 'add' })
    }
  }
}
</script>
