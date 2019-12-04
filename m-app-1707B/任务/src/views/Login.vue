<template>
  <div>
    <div>
      <input v-model="username" placeholder="请输入用户名" autofocus />
    </div>
    <div>
      <input type="password" v-model="password" placeholder="请输入用户名" @keyup.enter="handleLogin" />
    </div>
    <div>
      <button @click="handleLogin">登录</button>
    </div>
  </div>
</template>

<script>
import Api from "../api";

export default {
  data() {
    return {
      username: "admin",
      password: "123456"
    };
  },
  methods: {
    handleLogin() {
      Api.login({
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.code === 200) {
          localStorage.setItem('username', res.data.username)
          this.$router.push('/index/home')
        }
      });
    }
  }
};
</script>

<style>
</style>