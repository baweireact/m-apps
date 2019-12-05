<template>
  <div>
    <div v-for="(item, index) in myBook" :key="item.id">
      <input
        type="checkbox"
        :checked="item.checked"
        :id="item.id"
        @change="handleChecked(index, $event)"
      />
      <label :for="item.id">{{item.title}}</label>
      ￥{{item.price}}
      <button @click="handleSub(index)">-</button>
      {{item.count}}
      <button @click="handleAdd(index)">+</button>
      <button @click="handleDelete(item.id)">删除</button>
    </div>
    <div>
      <input type="checkbox" id="all" :checked="total.selectedAll" @change="handleSelectAll" />
      <label for="all">全选</label>
      <button @click="handleShowDialog">删除</button>
    </div>
    <div>总价：￥{{total.totalPrice}}，总数：{{total.totalCount}}</div>
    <Dialog :visible="visible"></Dialog>
  </div>
</template>

<script>
import Dialog from '../components/Dialog'

export default {
  data() {
    return {
      visible: false
    }
  },
  computed: {
    myBook() {
      return this.$store.state.myBook;
    },
    total() {
      let totalPrice = 0,
        totalCount = 0;
      let myBook = this.$store.state.myBook;
      myBook
        .filter(item => item.checked)
        .forEach(item => {
          totalCount += item.count;
          totalPrice += item.count * item.price;
        });
      let count = myBook.filter(item => item.checked).length;
      return {
        totalPrice,
        totalCount,
        selectedAll: count === myBook.length && myBook.length > 0  //每一本书选择状态改变时，全选复选框状态联动
      };
    }
  },
  components: {
    Dialog
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
    },
    //复选框
    handleChecked(index, e) {
      this.myBook[index].checked = e.target.checked;
      this.$store.commit({
        type: "setState",
        key: "myBook",
        value: this.myBook
      });
    },
    //联动，全选控制上面的每一项
    handleSelectAll(e) {
      let myBook = this.myBook;
      myBook.forEach(item => {
        item.checked = e.target.checked;
      });
      this.$store.commit({
        type: "setState",
        key: "myBook",
        value: this.myBook
      });
    },
    //删除选中的
    handleDeleteSelected() {
      let myBook = this.myBook;
      myBook = myBook.filter(item => !item.checked);
      this.$store.commit({
        type: "setState",
        key: "myBook",
        value: myBook
      });
    },
    handleShowDialog() {
      this.visible = true
    }
  },
  updated() {
    //每次更新完，都会往后端存一份，刷新时就不会丢了
    this.$store.dispatch({ type: "update" });
  },
  mounted() {
    //刷新时会再获取一遍后端的数据
    this.$store.dispatch({ type: "getMyBook" });
  }
};
</script>

<style>
</style>