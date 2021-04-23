<template>
  <div>
    <div>
      <input type="text" v-model="username" placeholder="请输入用户名" autofocus>
    </div>
    <div>
      <input :type="visible ? 'text' : 'password'" v-model="password" placeholder="请输入密码" @keyup.enter="handleLogin">
      <Icon :type="visible ? 'show' : 'hide'" @onClick="handleVisible" class="m-login-icon"></Icon>
    </div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import Api from '../api'
import Icon from '../components/Icon'

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
      Api.login({username: this.username, password: this.password}).then(res => {
        if (res.code === 200) {
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