<template>
  <span :class="[`icon iconfont icon-${type} ${classname ? classname : ''}`]" @click="handleClick"></span>
</template>

<script>
export default {
  props: ["type", "classname", "onClick"],
  methods: {
    handleClick() {
      this.$emit('onClick')
    }
  }
}
</script>

<style>

</style>