<template>
  <span :class="['icon iconfont icon-' + (active ? 'selected' : 'danxuan')]"></span>
</template>

<script>
export default {
  props: ['active']
}
</script>

<style>

</style>