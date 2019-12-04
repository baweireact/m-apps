<template>
  <div>
    <div v-for="item in list" :key="item.id" class="m-list-item">
      <div class="m-img-wrap">
        <img v-lazy="item.avatar" class="m-img">
      </div>
      <div class="m-task-info">
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