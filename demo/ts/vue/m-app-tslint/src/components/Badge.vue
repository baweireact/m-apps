<template>
  <span class="m-badge-wrap">
    <slot></slot>
    <span class="m-badge" v-if="formatCount > 0 || typeof formatCount === 'string'">{{formatCount}}</span>
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Badge extends Vue {
  @Prop() 
  count!:number

  get formatCount() {
    if (this.count < 100) {
      return this.count
    } else if (this.count >= 100) {
      return '99+'
    } else {
      return 0
    }
  }
}
</script>

<style>

</style>