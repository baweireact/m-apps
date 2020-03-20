<template>
  <div class="m-stars-wrap">
    <Icon name="xingxing" v-for="n in 5" :key="n" :class="[ 'm-star ' + (n <= count && 'active') ]"></Icon>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  props: {
    count: {
      type: Number
    }
  },
  components: {
    Icon
  }
}
</script>

<style>

</style>