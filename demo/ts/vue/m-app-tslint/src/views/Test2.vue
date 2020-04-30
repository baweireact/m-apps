<template>
  <div>
    1
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Test2 extends Vue {
  beforeRouteEnter(to, from, next) {
    console.log(1)
    next()
  }
}
</script>

<style>

</style>