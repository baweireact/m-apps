<template>
  <div>
    <img :src="detail.avatar" />
    <Stars :count="detail.stars"></Stars>
    <button v-if="detail.is_in_my_book">已收藏</button>
    <button v-else @click="handleAdd(detail)">收藏</button>
    <div>{{detail.summary}}</div>
  </div>
</template>

<script>
import Api from "../api";
import Stars from "../components/Stars";

export default {
  data() {
    return {
      detail: {}
    };
  },
  methods: {
    handleAdd(item) {
      item.count = 1
      item.checked = true
      Api.add({ item }).then(res => {
        if (res.code === 200) {
          this.detail.is_in_my_book = true
          this.detail = {...this.detail}
        }
      })
    }
  },
  components: {
    Stars
  },
  mounted() {
    let { id } = this.$route.params;
    Api.getDetail(`/${id}`).then(res => {
      if (res.code === 200) {
        this.detail = res.data;
      }
    });
  }
};
</script>

<style>
</style>