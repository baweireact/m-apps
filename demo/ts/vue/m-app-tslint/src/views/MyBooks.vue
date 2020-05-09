<template>
  <div class="m-main">
    <div class="m-my-books" v-if="myBooks.length > 0">
      <div class="m-my-books-content">
        <MyBookItem
          v-for="book in myBooks" 
          :key="book.id" 
          :book="book">
        </MyBookItem>
      </div>
      <div class="m-my-books-footer">
        <label>
          <input type="checkbox" :checked="total.checkedAll" @click="handleCheckedAll">
          全选
        </label>
        <button @click="handleShowDialog">删除</button>
        <span>
          合计: ￥{{total.totalPrice}}
        </span>
      </div>
    </div>
    <div v-else class="m-my-books-empty">
      购物车空空如也~
    </div>
    <Dialog title="删除" :visible="visible" @onCancel="handleCancel" @onOk="handleDeleteChecked">
      <template v-slot:content>
        <div class="m-my-books-delete-dialog-info">
          您确定要删除选中的商品吗？
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import Dialog from '../components/Dialog.vue'
import MyBookItem from '../components/MyBookItem.vue'

@Component({
  components: {
    Dialog,
    MyBookItem
  }
})
export default class extends Vue {
  @State(state => state.myBooks) myBooks!: any[]
  @Action('myBooksAction') myBooksAction!: Function

  visible = false

  get total() {
    return {
      totalPrice: this.myBooks.reduce((total, item) => total + item.count * item.price, 0),
      checkedAll: this.myBooks.every(item => item.checked)
    }
  }

  handleCheckedAll(e:any) {
    this.myBooksAction({ data: { operation: 'checkedAll', checked: e.target.checked }, method: 'patch' })
  }
  handleShowDialog() {
    let myBooks = this.myBooks
    if (myBooks.filter(item => item.checked).length === 0) {
      //this.$message({ message: '请选择要删除的商品哦~', duration: 2000 })
    } else {
      this.visible = true
    }
  }
  handleDeleteChecked() {
    let ids = this.myBooks.filter(item => item.checked).map(item => item.id)
    this.myBooksAction({ data: { ids }, method: 'delete', callback: () => {
      this.handleCancel()
    }})
  }
  handleCancel() {
    this.visible = false
  }
}
</script>

<style>

</style>