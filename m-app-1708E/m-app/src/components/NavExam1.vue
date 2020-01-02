<template>
  <div>
    <span
      v-for="item in navList"
      :key="item.id"
      class="m-nav-item"
      :class="{active: currentId === item.id}"
      @click="onNav(item.id)"
    >{{item.title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array
    },
    currentId: {
      type: Number,
      default: 0
    },
    onNav: {
      type: Function
    }
  }
};
</script>

<style>
</style>