<template>
  <div>
    <Icon v-for="n in 5" :key="n" type="xingxing" :class="'m-star-icon ' + (n <= count ? 'active' : '')"></Icon>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  props: ['count'],
  components: {
    Icon
  }
}
</script>

<style>

</style>