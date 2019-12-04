<template>
  <div>
    <span v-for="n in 5" :key="n" class="m-star-icon icon iconfont icon-star" :class="{active: n <= count}"></span>
  </div>
</template>

<script>
export default {
  props: ["count"]
}
</script>

<style>

</style>