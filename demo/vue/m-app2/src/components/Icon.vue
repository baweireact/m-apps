<template>
  <span :class="[ `icon iconfont icon-${name}` ]" @click="handleClick">

  </span>
</template>

<script>
export default {
 props: {
   name: String
 },
 methods: {
   handleClick() {
     this.$emit('onClick')
   }
 }
}
</script>

<style>

</style>