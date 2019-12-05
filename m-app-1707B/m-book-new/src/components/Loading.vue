<template>
  <div class="m-loading" :class="{active: loading}">

  </div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.state.loading
    }
  }
}
</script>

<style>

</style>