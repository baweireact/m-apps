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
      <div>
        <label>
          <input type="checkbox" :checked="total.checkedAll" @click="handleCheckAll">
          全选
        </label>
        <button @click="handleDeleteChecked">删除</button>
      </div>
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
      let totalCount = myBook.filter(item => item.checked).reduce((total, item) => {
        return total + item.count;
      }, 0);
      let totalPrice = myBook.filter(item => item.checked).reduce((total, item) => {
        return total + item.count * item.price;
      }, 0);
      return {
        totalCount,
        totalPrice,
        checkedAll: myBook.every(item => item.checked)
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
    handleCheck(index, e) {
      let myBook = this.myBook;
      myBook[index].checked = e.target.checked
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
    },
    handleCheckAll(e) {
      let myBook = this.myBook;
      myBook.forEach(item => {
        item.checked = e.target.checked
      })
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
    },
    handleDeleteChecked() {
      let myBook = this.myBook;
      myBook = myBook.filter(item => !item.checked)
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