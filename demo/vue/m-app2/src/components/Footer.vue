<template>
  <div class="m-footer">
    <router-link to="/index/home" class="m-footer-item">
      <Icon name="shouye" class="m-footer-icon"></Icon>
      <div class="m-footer-text">首页</div>
    </router-link>
    <router-link to="/index/my_book" class="m-footer-item">
      <Badge :count="count">
        <Icon name="shubao" class="m-footer-icon"></Icon>
      </Badge>
      <div class="m-footer-text">书包</div>
    </router-link>
    <router-link to="/index/me" class="m-footer-item">
      <Icon name="wodedangxuan" class="m-footer-icon"></Icon>
      <div class="m-footer-text">我的</div>
    </router-link>
  </div>
</template>

<script>
import Badge from './Badge'
import Icon from './Icon'

export default {
  computed: {
    count() {
      let myBooks = this.$store.state.myBooks
      let sum = myBooks.reduce((total, currentValue) => {
        return total + currentValue.count
      }, 0)
      return sum
    }
  },
  components: {
    Badge,
    Icon
  }
}
</script>

<style>

</style>