<template>
  <div>
    <div>
      <input type="text" v-model="username" placeholder="请输入用户名">
    </div>
    <button @click="handleLogin">开始测试</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  },
  methods: {
    handleLogin() {
      this.$store.commit({ type: 'setState', key: 'username', value: this.username})
      this.$router.push('/question')
    }
  }
}
</script>

<style>

</style>