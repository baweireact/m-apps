<template>
  <div>
    1
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  mounted() {
    Vue.myGlobalMethod()
    this.$myMethod()
    console.log(this.$myMethodTest)
    this.$myMethodTest.test()
  }
}
</script>

<style>

</style>