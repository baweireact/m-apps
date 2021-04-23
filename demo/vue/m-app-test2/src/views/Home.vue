<template>
  <div class="m-center m-home">
    <Sidebar></Sidebar>
    <List></List>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import List from '../components/List'

export default {
  components: {
    Sidebar,
    List
  },
  mounted() {
    this.$store.dispatch({ type: 'getList' })
  }
}
</script>

<style>

</style>