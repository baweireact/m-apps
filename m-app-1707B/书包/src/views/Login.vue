<template>
  <div>
    <div>
      <input type="text" v-model="username" placeholder="请输入用户名">
    </div>
    <div>
      <input type="password" v-model="password" placeholder="请输入密码">
    </div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: 'admin',
      password: '123456'
    }
  },
  methods: {
    handleLogin() {
      axios({
        url: '/api/login',
        data: {
          username: this.username,
          password: this.password
        },
        method: 'post'
      }).then(res => {
        if (res.data.code === 200) {
          this.$router.push('/index/home')
        } else {
          alert(res.data.message)
        }
      })
    }
  }
}
</script>

<style>

</style>