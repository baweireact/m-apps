<template>
  <div class="m-badge-wrap">
    <slot></slot>
    <span class="m-badge" v-if="formatCount > 0" >{{formatCount}}</span>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number
    }
  },
  computed: {
    formatCount() {
      return this.count
    }
  }
}
</script>

<style>

</style>