<template>
  <div>
    <div>{{msg}}</div>
    <div>{{count}}</div>
    <button @click="handleSub(1)">减</button>
    <button @click="handleAdd(1)">加</button>
    <TestComponent name="hello"></TestComponent>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Log, LogPlus } from '../utils/decorators'
import TestComponent from '../components/TestComponent.vue'

@Component({
  components: {
    TestComponent
  }
})
export default class Test extends Vue {
  msg = 'hello'
  count = 0

  @Log
  handleAdd(step:number) {
    this.count += step
  }

  @LogPlus('减法')
  handleSub(step:number) {
    this.count -= step
  }
}
</script>