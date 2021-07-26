<template>
  <div>
    子组件：{{count}}
    <ChildItem v-for="book in list" :key="book.id" :book="book"></ChildItem>
  </div>
</template>

<script>
import ChildItem from './ChildItem'
export default {
  props: {
    count: {
      type: Number
    }
  },
  components: {
    ChildItem
  },
  computed: {
    list() {
      return this.$store.state.list
    }
  },
  updated() {
    console.log('子组件更新完')
  },
  mounted() {
    console.log('子组件挂载完')
  }
}
</script>

<style>

</style>