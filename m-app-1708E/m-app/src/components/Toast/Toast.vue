<template>
  <div class="m-toast-mask" :id="id" >
    <div class="m-toast">{{message}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      duration: 3000,
      message: '',
      id: Date.now()
    }
  },
  mounted() {
    setTimeout(() => {
      //document.getElementById(this.id).remove()
      document.body.removeChild(document.getElementById(this.id))
    }, this.duration)
  }
}
</script>

<style>

</style>