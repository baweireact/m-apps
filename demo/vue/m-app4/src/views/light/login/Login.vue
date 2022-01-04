<template>
  <div>
    <div>
      <input type="text" placeholder="用户名" v-model="username">
    </div>
    <div>
      <input type="text" placeholder="密码" v-model="password">
    </div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import Api from '../../../api'

export default {
  data() {
    return {
      username: 'admin',
      password: '123456'
    }
  },
  methods: {
    handleLogin() {
      Api.light.login({username: this.username, password: this.password}).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.$router.history.push('/index/home')
        }
        
      })
      console.log(this.username, this.password)
    }
  }
}
</script>

<style>

</style>