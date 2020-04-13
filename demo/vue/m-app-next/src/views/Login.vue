<template>
  <div>
    <div>
      <input v-model="state.username" placeholder="请输入用户名">
    </div>
    <div>
      <input v-model="state.password" placeholder="请输入密码">
    </div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api'
import Api from '../api'

export default {
  setup() {
    const state = reactive({
      username: 'admin',
      password: '123456'
    })

    const handleLogin = () => {
      Api.login({ username: state.username, password: state.password }).then(res => {
        if (res.code === 200) {
          
        }
      })
    }

    return {
      state,
      handleLogin
    }
  }
}
</script>

<style>

</style>