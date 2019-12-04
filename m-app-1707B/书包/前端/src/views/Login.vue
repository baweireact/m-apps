<template>
  <div>
    <div>
      <input type="text" v-model="username" placeholder="请输入用户名" />
    </div>
    <div>
      <input :type="show ? 'text' : 'password'" v-model="password" placeholder="请输入密码" />
      <Icon :type="show ? 'xianshimima' : 'guanbi'" @click.native="handleShow"></Icon>
    </div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import Api from "../api";
import Icon from '../components/Icon'

export default {
  data() {
    return {
      username: "admin",
      password: "123456",
      show: false
    };
  },
  components: {
    Icon
  },
  methods: {
    handleLogin() {
      Api.login({
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.code === 200) {
          this.$router.push("/index/home");
        } else {
          alert(res.message);
        }
      });
    },
    handleShow() {
      this.show = !this.show
    }
  }
};
</script>

<style>
</style>