<template>
  <span :class="[`icon iconfont icon-${type} ${classname ? classname : ''}`]" @click="handleClick"></span>
</template>

<script>
export default {
  //props: ["type", "classname"],
  props: {
    type: {
      type: String
    },
    classname: {
      type: String
    }
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