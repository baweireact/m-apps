<template>
  <div>
    <div>
      <input v-model="username" placeholder="请输入用户名" autofocus >
    </div>
    <div>
      <input v-model="password" placeholder="请输入密码" :type=" visible ? 'text' : 'password'" @keyup.enter="handleLogin" >
      <Icon :name="visible ? 'xianshimima' : 'buxianshimima'" class="m-login-icon" @onClick="handleVisible" ></Icon>
    </div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import axios from 'axios'
import Icon from '../components/Icon'
import Api from '../api'

export default {
  data() {
    return {
      username: 'admin',
      password: '123456',
      visible: false
    }
  },
  components: {
    Icon
  },
  methods: {
    handleLogin() {
      Api.login({ username: this.username, password: this.password }).then(res => {
        if (res.code === 200) {
          localStorage.setItem('token', res.data.username)
          this.$router.push('/index/home')
        }
      })
    },
    handleVisible() {
      this.visible = !this.visible
    }
  }
}
</script>

<style>

</style>