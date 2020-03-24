<template>
  <div class="m-badge-wrap">
    <slot></slot>
    <span class="m-badge" v-if="formatCount > 0 || typeof formatCount === 'string'" >{{formatCount}}</span>
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
      if (this.count < 100) {
        return this.count
      } else {
        return '99+'
      }
    }
  }
}
</script>

<style>

</style>