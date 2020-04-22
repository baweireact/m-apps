<template>
  <div>
    <div>{{count}}</div>
    <button @click="handleSub">减</button>
    <button @click="handleAdd">加</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Mutation } from 'vuex-class'

@Component
class Login extends Vue {
  @State('count') count!:number
  @Mutation('setState') setState!:Function

  handleSub() {
    let count = this.count - 1
    this.setState({ key: 'count', value: count })
  }

  handleAdd() {
    let count = this.count + 1
    this.setState({ key: 'count', value: count })
  }
}

export default Login
</script>
