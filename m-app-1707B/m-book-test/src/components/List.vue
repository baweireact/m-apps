<template>
  <div>
    <div v-for="item in currentList" :key="item.id">
      <div>
        {{item.title}},
        <button @click="handleDetail(item.id)">详情</button>
        <button v-if="item.is_in_my_book">已收藏</button>
        <button v-else @click="handleAdd(item)">收藏</button>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../api";

export default {
  computed: {
    currentList() {
      return this.$store.state.currentList;
    }
  },
  methods: {
    handleDetail(id) {
      this.$router.push(`/index/detail/${id}`);
    },
    handleAdd(item) {
      let myBook = this.$store.state.myBook;
      item.count = 1
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