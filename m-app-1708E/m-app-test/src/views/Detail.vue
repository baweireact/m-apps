<template>
  <div>
    <img :src="detail.avatar" width="255" height="300" />
    <div>
      <button v-if="detail.is_in_my_book">已收藏</button>
      <button v-else @click="handleAdd(detail)">收藏</button>
    </div>
    <div>{{detail.summary}}</div>
  </div>
</template>

<script>
import Api from "../api";

export default {
  data() {
    return {
      detail: {}
    };
  },
  methods: {
    //收藏， is_in_my_book标识收藏和已收藏， 已收藏：true，收藏：false
    handleAdd(item) {
      item.count = 1;
      item.checked = true;
      this.$store.commit({ type: "setState", key: "loading", value: true });
      Api.add({ item }).then(res => {
        if (res.code === 200) {
          this.detail.is_in_my_book = true;
          this.$store.commit({
            type: "setState",
            key: "loading",
            value: false
          });
        }
      });
    }
  },
  mounted() {
    let { id } = this.$route.params;
    this.$store.commit({ type: "setState", key: "loading", value: true });
    Api.getDetail(id).then(res => {
      if (res.code === 200) {
        this.detail = res.data;
        this.$store.commit({ type: "setState", key: "loading", value: false });
      }
    });
  }
};
</script>

<style>
</style>