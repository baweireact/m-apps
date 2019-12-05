<template>
  <div>
    <div>
      <input type="text" v-model="username" placeholder="请输入用户名" autofocus />
    </div>
    <div>
      <input :type="show ? 'text' : 'password'" v-model="password" placeholder="请输入密码" @keyup.enter="handleLogin" />
      <Icon :type="show ? 'xianshimima' : 'guanbi'" @click.native="handleShow"></Icon>
    </div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import Api from "../api";
import Icon from "../components/Icon";

export default {
  data() {
    return {
      username: "",
      password: "",
      show: false
    };
  },
  components: {
    Icon
  },
  methods: {
    handleLogin() {
      if (!this.username.trim()) {
        alert("用户名不能为空！");
        return;
      }
      if (!this.password.trim()) {
        alert("用户名不能为空！");
        return;
      }
      Api.login({
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.code === 200) {
          localStorage.setItem('username', res.data.username)
          this.$router.push("/index/home");
        }
      });
    },
    handleShow() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
</style>