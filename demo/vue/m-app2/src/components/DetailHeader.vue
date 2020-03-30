<template>
  <div class="m-detail-header">
    <Icon name="flow" class="m-detail-header-icon" @onClick="handleBack"></Icon>
    <div class="m-detail-header-title">{{title}}</div>
    <Icon name="gengduo" class="m-detail-header-icon"></Icon>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  props: {
    title: {
      type: String
    }
  },
  components: {
    Icon
  },
  methods: {
    handleBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>