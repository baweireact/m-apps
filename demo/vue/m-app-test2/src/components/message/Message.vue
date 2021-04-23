<template>
  <div class="m-wrap" :id="id">
    <div class="m-message">
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: Date.now(),
      message: '消息',
      duration: 3000
    }
  },
  mounted() {
    setTimeout(() => {
      window.document.getElementById(this.id).remove()
    }, this.duration)
  }
}
</script>

<style scoped>
.m-wrap{display: flex; position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0);}
.m-message{margin: auto;padding: 0 10px; min-width: 100px;min-height: 40px;line-height: 40px; background: rgba(0, 0, 0, 0.7);color: #fff;border-radius: 5px;text-align: center;box-shadow: 5px 5px 5px #888;}
</style>