<template>
  <div class="m-sidebar">
    <div 
      v-for="item in list" 
      :key="item.id" 
      class="m-sidebar-item" 
      :class="currentId === item.id ? 'active' : ''"
      @click="handleNav(item.id)">{{item.title}}</div>
  </div>
</template>

<script>
let timer

export default {
  computed: {
    list() {
      return this.$store.state.list
    },
    currentId() {
      return this.$store.state.currentId
    }
  },
  methods: {
    handleNav(id) {
      this.$store.commit({ type: 'setState', key: 'currentId', value: id })
      document.getElementById(id).scrollIntoView({ block: 'start', behavior: 'smooth' })
      clearTimeout(timer)
      this.$store.commit({ type: 'setState', key: 'isRealScroll', value: false })
      timer = setTimeout(() => {
        this.$store.commit({ type: 'setState', key: 'isRealScroll', value: true })
      }, 1000)
    }
  }
}
</script>

<style>

</style>