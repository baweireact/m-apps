<template>
  <div>
    <span
      class="m-star icon iconfont icon-iconfontxingxing"
      :class="{active: n <= count }"
      v-for="n in 5"
      :key="n"
    ></span>
  </div>
</template>

<script>
export default {
  props: ["count"]
};
</script>

<style>
</style>