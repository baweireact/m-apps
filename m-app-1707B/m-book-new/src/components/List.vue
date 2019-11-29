<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <div>
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.currentList
    }
  }
}
</script>

<style>

</style>