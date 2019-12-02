<template>
  <div>
    <span
      v-for="item in navList"
      :key="item.id"
      class="m-nav-item"
      :class="{active: currentId === item.id}"
      @click="handleNav(item.id)"
    >{{item.title}}</span>
  </div>
</template>

<script>
export default {
  computed: {
    navList() {
      return this.$store.state.navList;
    },
    currentId() {
      return this.$store.state.currentId;
    }
  },
  methods: {
    handleNav(currentId) {
      this.$store.commit({ type: 'setState', key: 'currentId', value: currentId })
      this.$store.dispatch({ type: 'getList' })
    }
  },
  mounted() {
    this.$store.dispatch({ type: "getNav" });
    this.$store.dispatch({ type: 'getList' })
  }
};
</script>

<style>
</style>