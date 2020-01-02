<template>
  <div>
    <div v-for="(item, index) in myBook" :key="item.id" class="m-my-book-item">
      <div class="m-my-book-info">
        <label>
          <input type="checkbox" :checked="item.checked" @change="handleCheck(index, $event)" />
          {{item.title}}
        </label>
        ￥{{item.price}}
      </div>
      <div class="m-my-book-action">
        <button @click="handleSub(index)">-</button>
        {{item.count}}
        <button @click="handleAdd(index)">+</button>
        <button @click="handleDelete(index)">删除</button>
      </div>
    </div>
    <div v-if="myBook.length > 0">
      <div>总价：￥{{total.totalPrice}},总数：{{total.totalCount}}</div>
    </div>
    <div v-else>书包空空如也~~~</div>
  </div>
</template>

<script>
import Api from "../api";

export default {
  computed: {
    myBook() {
      return this.$store.state.myBook;
    },
    total() {
      let myBook = this.myBook;
      let totalCount = myBook.reduce((total, item) => {
        return total + item.count;
      }, 0);
      let totalPrice = myBook.reduce((total, item) => {
        return total + item.count * item.price;
      }, 0);
      return {
        totalCount,
        totalPrice
      };
    }
  },
  methods: {
    handleSub(index) {
      let myBook = this.myBook;
      if (myBook[index].count > 1) {
        myBook[index].count--;
        this.$store.commit({ type: "setState", key: "myBook", value: myBook });
      }
    },
    handleAdd(index) {
      let myBook = this.myBook;
      myBook[index].count++;
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
    },
    handleDelete(index) {
      let myBook = this.myBook;
      myBook.splice(index, 1)
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
    },
    handleCheck(e) {
      let myBook = this.myBook;
      myBook.splice(index, 1)
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
    }
  },
  updated() {
    Api.update({ myBookNew: this.myBook }).then(res => {});
  },
  mounted() {
    this.$store.dispatch({ type: "getMyBook" });
  }
};
</script>

<style>
</style>