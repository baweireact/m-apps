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
        <button @click="handleShowDialog">删除</button>
      </div>
      <div>总价：￥{{total.totalPrice}},总数：{{total.totalCount}}</div>
    </div>
    <div v-else>书包空空如也~~~</div>
    <Dialog :visible="visible" title="删除">
      <template v-slot:content>
        <div class="m-delete-info">
          <Icon type="shanchu" classname="m-delete-icon"></Icon>
          <div class="m-delete-text">
            你确定要删除选中的商品吗？
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <button class="m-btn" @click="handleHideDialog">取消</button>
        <button class="m-btn" @click="handleDeleteChecked">确定</button>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Api from "../api";
import Dialog from '../components/Dialog'
import Icon from '../components/Icon'
import toast from '../components/Toast'

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
  components:{
    Dialog,
    Icon
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
      this.handleHideDialog()
    },
    handleShowDialog() {
      if (this.myBook.filter(item => item.checked).length === 0) {
        //alert('请选择要删除的商品~')
        //toast({message: '请选择要删除的商品~', duration: 1000})
        this.$toast({message: '请选择要删除的商品~'})
        return
      }
      this.visible = true
    },
    handleHideDialog() {
      this.visible = false
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