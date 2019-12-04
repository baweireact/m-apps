<template>
  <div>
    <div v-for="(item, index) in myBook" :key="item.id">
      {{item.title}},
      ￥{{item.price}}
      <button @click="handleSub(index)">-</button>
      {{item.count}}
      <button @click="handleAdd(index)">+</button>
      <button @click="handleDelete(item.id)">删除</button>
    </div>
    <div>
      总价：￥{{total.totalPrice}}，总数：{{total.totalCount}}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    myBook() {
      return this.$store.state.myBook;
    },
    total() {
      let totalPrice = 0, totalCount = 0
      this.$store.state.myBook.forEach(item => {
        totalCount += item.count
        totalPrice += item.count * item.price
      })
      return {
        totalPrice,
        totalCount
      }
    }
  },
  methods: {
    //删除
    handleDelete(id) {
      let index = this.myBook.findIndex(item => item.id === id);
      this.myBook.splice(index, 1);
      this.$store.commit({
        type: "setState",
        key: "myBook",
        value: this.myBook
      });
    },
    //加
    handleAdd(index) {
      this.myBook[index].count++;
      this.$store.commit({
        type: "setState",
        key: "myBook",
        value: this.myBook
      });
    },
    //减
    handleSub(index) {
      if (this.myBook[index].count > 1) {
        this.myBook[index].count--;
        this.$store.commit({
          type: "setState",
          key: "myBook",
          value: this.myBook
        });
      }
    }
  },
  updated() {
    //每次更新完，都会往后端存一份，刷新时就不会丢了
    this.$store.dispatch({ type: 'update'})
  },
  mounted() {
    //刷新时会再获取一遍后端的数据
    this.$store.dispatch({ type: "getMyBook" });
  }
};
</script>

<style>
</style>