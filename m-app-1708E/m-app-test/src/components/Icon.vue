<template>
  <span :class="[`icon iconfont icon-${type} ${classname ? classname : ''}`]" @click="handleClick"></span>
</template>

<script>
export default {
  props: ['type', 'onClick', 'classname'],
  methods: {
    handleClick() {
      this.$emit('onClick')
    }
  }
}
</script>

<style>

</style>