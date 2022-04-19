<template>
  <div class="m-login-wrap">
    <div class="m-login-inner">
      <div class="m-login-left">
        <div class="m-login-logo"></div>
        <div class="m-login-title">豆伴匠管理平台</div>
      </div>
      <div class="m-login-right">
        <el-tabs v-model="tabActiveName" @tab-click="handleTabClick">
          <el-tab-pane label="手机号登录" name="1">
            <el-form
              :model="mobilePhoneLoginForm"
              :rules="mobilePhoneLoginFormRules"
              ref="mobilePhoneLoginForm"
              class="m-login-form"
            >
              <el-form-item label="" prop="mobilePhone">
                <el-input
                  v-model="mobilePhoneLoginForm.mobilePhone"
                  prefix-icon="el-icon-mobile-phone"
                  clearable
                  maxlength="11"
                ></el-input>
              </el-form-item>
              <el-form-item label="" prop="password">
                <el-input
                  v-model="mobilePhoneLoginForm.password"
                  prefix-icon="el-icon-lock"
                  clearable
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" plain @click="handleMobilePhoneLogin()" class="m-login-btn">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="邮箱登录" name="2">邮箱登录</el-tab-pane>
          <el-tab-pane label="企业微信登录" name="3">企业微信登录</el-tab-pane>
          <el-tab-pane label="飞书登录" name="4">飞书登录</el-tab-pane>
        </el-tabs>
      </div>
      <!-- <div>
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
      <el-button type="primary" @click="handleLogin">登录</el-button> -->
    </div>
  </div>
</template>

<script>
import { Icon } from '../../../components/light'
import Api from '../../../api'
import { Button, Tabs, TabPane, Input, Form, FormItem } from 'element-ui'
import './login.css'

export default {
  data() {
    return {
      tabActiveName: '1',
      mobilePhoneLoginForm: {
        mobilePhone: '',
        password: '',
      },
      mobilePhoneLoginFormRules: {
        mobilePhone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
      username: 'admin',
      password: '123456',
      visible: false,
    }
  },
  components: {
    Icon,
    [Button.name]: Button,
    [Tabs.name]: Tabs,
    [TabPane.name]: TabPane,
    [Input.name]: Input,
    [Form.name]: Form,
    [FormItem.name]: FormItem,
  },
  methods: {
    handleTabClick(tab) {
      console.log(tab)
    },
    handleMobilePhoneLogin() {
      console.log(this.mobilePhoneLoginForm)
    },
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
