<template>
  <div>
    <div v-for="item in list" :key="item.id" class="m-list-item">
      <div class="m-img-wrap">
        <img v-lazy="item.avatar" class="m-img" />
      </div>
      <div class="m-info">
        {{item.title}}
        <Stars :count="item.stars"></Stars>
        <button @click="handleDetail(item.id)">详情</button>
        <button v-if="item.is_in_my_book">已收藏</button>
        <button v-else @click="handleAdd(item)">收藏</button>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "../components/Stars";
import Api from '../api'

export default {
  computed: {
    list() {
      return this.$store.state.currentList;
    }
  },
  components: {
    Stars
  },
  methods: {
    handleDetail(id) {
      this.$router.push(`/index/detail/${id}`);
    },
    handleAdd(item) {
      let myBook = this.$store.state.myBook;
      item.count = 1;
      item.checked = true
      myBook.push(item);
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
      this.$store.commit({ type: "setState", key: "loading", value: true });
      Api.add({
        book: item
      }).then(res => {
        if (res.code === 200) {
          this.$store.dispatch({ type: "getList" });
        }
      });
    }
  }
};
</script>

<style>
</style>