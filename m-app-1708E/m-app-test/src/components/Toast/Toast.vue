<template>
  <div class="m-toast-mask" :id="id">
    <div class="m-toast">{{message}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      duration: 3000,
      id: Date.now(),
      message: ''
    }
  },
  mounted() {
    setTimeout(() => {
      document.getElementById(this.id).remove()
    }, this.duration)
  }
}
</script>

<style>

</style>