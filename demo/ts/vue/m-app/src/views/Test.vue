<template>
  <div>
    <div>{{msg}}</div>
    <div>{{count}}</div>
    <button @click="handleAdd(1)">加</button>
    <TestComponent name="hello"></TestComponent>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Log } from '../utils/decorators'
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
  handleAdd(step) {
    this.count += step
  }
}
</script>