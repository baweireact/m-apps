<template>
  <div>
    <div>
      <input v-model="username" placeholder="请输入用户名">
    </div>
    <div>
      <input v-model="password" placeholder="请输入密码" :type="visible ? 'text' : 'password'">
      <Icon :name="visible ? 'show' : 'hide'" @onClick="handleVisible" className="m-login-icon" ></Icon>
    </div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Icon from '../components/Icon.vue'
import Api from '../api'

@Component({
  components: {
    Icon
  }
})
export default class Login extends Vue {
  username = 'admin'
  password = '123456'
  visible = false

  handleVisible() {
    this.visible = !this.visible
  }

  handleLogin() {
    Api.login({ username: this.username, password: this.password }).then(res => {
      if (res.code === 200) {
        localStorage.setItem('token', res.data.username);
        (this as any).$router.push('/index/home')
        console.log((this as any).$store.state.count)
      }
    })
  }
}
</script>

<style>

</style>