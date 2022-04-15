<template>
  <div>
    <div>
      <input v-model="username" placeholder="请输入用户名" autofocus />
    </div>
    <div>
      <input
        v-model="password"
        placeholder="请输入密码"
        :type="visible ? 'text' : 'password'"
        @keyup.enter="handleLogin"
      />
      <Icon
        :name="visible ? 'show' : 'close'"
        class="m-login-icon"
        @onClick="handleVisible"
      ></Icon>
    </div>
    <el-button type="primary" @click="handleLogin">登录</el-button>
  </div>
</template>

<script>
import { Icon } from '../../../components/light'
import Api from '../../../api'
import { Button } from 'element-ui'

export default {
  data() {
    return {
      username: 'admin',
      password: '123456',
      visible: false,
    }
  },
  components: {
    Icon,
    [Button.name]: Button
  },
  methods: {
    handleLogin() {
      Api.light
        .login({ username: this.username, password: this.password })
        .then((res) => {
          if (res.state === 1) {
            localStorage.setItem('token', res.data.username)
            this.$router.push('/light/index/home')
          }
        })
    },
    handleVisible() {
      this.visible = !this.visible
    },
  },
}
</script>

<style></style>
