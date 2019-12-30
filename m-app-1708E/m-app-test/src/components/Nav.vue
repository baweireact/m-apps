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
    //获取仓库里的值
    navList() {
      return this.$store.state.navList;
    },
    currentId() {
      return this.$store.state.currentId;
    }
  },
  methods: {
    //提交mutation，修改仓库里的值
    handleNav(currentId) {
      this.$store.commit({ type: 'setCurrentId', currentId })
      this.$store.dispatch({ type: 'getList' })
    }
  },
  mounted() {
    //触发action里的方法 https://vuex.vuejs.org/zh/guide/actions.html
    this.$store.dispatch({ type: "getNavList" });
    this.$store.dispatch({ type: 'getList' })
  }
};
</script>

<style>
</style>