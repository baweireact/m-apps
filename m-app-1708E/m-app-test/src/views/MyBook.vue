<template>
  <div>
    <div v-for="(item, index) in myBook" :key="item.id" class="m-my-book-item">
      <div class="m-my-book-info">
        <label><input type="checkbox" :checked="item.checked" @change="handleCheck(index, $event)">{{item.title}} </label>
        ￥{{item.price}}
      </div>
      <div class="m-my-book-action">
        <button @click="handleSub(index)">-</button>
        <span class="m-count">{{item.count}}</span> 
        <button @click="handleAdd(item.id)">+</button>
        <button @click="handleDelete(index)">删除</button>
      </div>
    </div>
    <div v-if="myBook.length > 0">
      <div>
        <label>
          <input type="checkbox" :checked="total.checkedAll" @click="handleCheckAll">全选
        </label>
        <button @click="handleShowDialog">删除</button>
      </div>
      <div>
        总价：￥{{total.totalPrice}}，总数：{{total.totalCount}}
      </div>
    </div>
    <div v-else>
      空空如也~~~
    </div>
    <Dialog :visible="visible" title="删除">
      <template v-slot:content>
        <div class="m-delete-info">
          <Icon type="shanchu" classname="m-delete-icon"></Icon>
          <div>你确定要删除选中的商品吗？</div>
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
import Api from '../api'
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
    //通过计算属性计算总价，总数，全选复选框的状态
    total() {
      let myBook = this.myBook
      let totalPrice = 0, totalCount = 0
      myBook.filter(item => item.checked).forEach(item => {
        totalCount += item.count
        totalPrice += item.count * item.price
      })
      return {
        totalPrice,
        totalCount,
        checkedAll: myBook.every(item => item.checked)
      }
    }
  },
  components: {
    Dialog,
    Icon
  },
  methods: {
    //减
    handleSub(index) {
      let myBook = this.myBook;
      if (myBook[index].count > 1) {
        myBook[index].count--;
        this.$store.commit({ type: "setState", key: "myBook", value: myBook });
      }
    },
    //加
    handleAdd(id) {
      let myBook = this.myBook;
      let index = myBook.findIndex(item => item.id === id);
      myBook[index].count++;
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
    },
    //删除单个
    handleDelete(index){
      let myBook = this.myBook;
      myBook.splice(index, 1)
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
    },
    //选择，复选框
    handleCheck(index, e) {
      let myBook = this.myBook;
      myBook[index].checked = e.target.checked
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
    },
    //全选
    handleCheckAll(e) {
      let myBook = this.myBook;
      myBook.forEach(item => {
        item.checked = e.target.checked
      })
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
    },
    //删除选中的
    handleDeleteChecked() {
      let myBook = this.myBook;
      myBook = myBook.filter(item => !item.checked)
      this.$store.commit({ type: "setState", key: "myBook", value: myBook });
      this.handleHideDialog()
    },
    handleShowDialog() {
      if (this.myBook.filter(item => item.checked).length === 0) {
        //alert('请选择要删除的商品~')
        toast({message: '请选择要删除的商品~', duration: 500})
        return
      }
      this.visible = true
    },
    handleHideDialog() {
      this.visible = false
    }
  },
  //组件每次重新渲染后，会走这个生命周期，把数据保存到后端
  updated() {
    Api.update({ myBookNew: this.myBook })
  },
  //每次刷新会请求一下数据
  mounted() {
    this.$store.dispatch({ type: "getMyBook" });
  }
};
</script>

<style>
</style>