<template>
  <div>
    1
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  mounted() {
    console.log(555)
    Vue.myGlobalMethod()
    this.$myMethod()
    console.log(this.$myMethodTest)
    this.$myMethodTest.test()
  }
}
</script>

<style>

</style>