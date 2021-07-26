<template>
  <div>
    父
    <Child :count="count"></Child>
    <button @click="handleAdd">加</button>
  </div>
</template>

<script>
import Child from './Child'
export default {
  components: {
    Child
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleAdd() {
      this.count++
    }
  },
  updated() {
    console.log('父组件更新完')
  },
  mounted() {
    console.log('父组件挂载完')
    this.$store.dispatch({ type: 'getList' })
  }
}
</script>

<style>

</style>