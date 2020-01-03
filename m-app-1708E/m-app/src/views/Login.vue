<template>
  <div>
    <div>
      姓名：<input type="text" v-model="username" placeholder="请输入用户名" autofocus>
    </div>
    <div>
      密码：<input :type="visible ? 'text' : 'password'" v-model="password" placeholder="请输入密码" @keyup.enter="handleLogin">
      <Icon :type="visible ? 'xianshimima' : 'buxianshimima'" classname="m-login-icon" @onClick="handleShow"></Icon>
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
      if (this.username.trim() === '') {
        alert('用户名不能为空')
        return
      } else if (this.password.trim() === '') {
        alert('密码不能为空')
        return
      }
      Api.login({username: this.username, password: this.password}).then(res => {
        if (res.code === 200) {
          this.$router.push('/index/home')
          localStorage.setItem('username', res.data.username)
        } else if (res.code === 400) {
          alert(res.data.message)
        }
      })
    },
    handleShow() {
      this.visible = !this.visible
    }
  }
}
</script>

<style>

</style>