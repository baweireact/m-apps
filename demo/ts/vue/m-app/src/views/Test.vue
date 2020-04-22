<template>
  <div>
    <div>{{msg}}</div>
    <button @click="handleAdd">按钮</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  msg: string = '我是msg'

  handleAdd() {
    console.log(1)
  }

  created() {
    console.log('创建完')
  }

  mounted() {
    console.log('挂载完')
  }
}

</script>
