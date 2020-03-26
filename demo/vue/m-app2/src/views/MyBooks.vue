<template>
  <div class="m-main">
    <div class="m-my-books" v-if="myBooks.length > 0">
      <div class="m-my-books-content">
        <MyBookItem
          v-for="(book, index) in myBooks" 
          :key="book.id" 
          :book="book"
          :index="index"
          :operation="operation"
          @onOperation="handleOperation">
        </MyBookItem>
      </div>
      <div class="m-my-books-footer">
        <label>
          <input type="checkbox" :checked="total.checkedAll" @click="handleCheckedAll">
          全选
        </label>
        <button @click="handleDeleteChecked">删除</button>
        <span>
          合计: ￥{{total.totalPrice}}
        </span>
      </div>
    </div>
    <div v-else class="m-my-books-empty">
      购物车空空如也~
    </div>
  </div>
</template>

<script>
import MyBookItem from '../components/MyBookItem'
import Api from '../api'

export default {
  data() {
    return {
      operation: {}
    }
  },
  computed: {
    myBooks() {
      return this.$store.state.myBooks
    },
    total() {
      let myBooks = this.$store.state.myBooks
      let totalPrice = myBooks.filter(item => item.checked).reduce((totalPrice, item) => {
        return totalPrice + item.count * item.price
      }, 0)
      return {
        checkedAll: myBooks.every(item => item.checked),
        totalPrice
      }
    }
  },
  components: {
    MyBookItem
  },
  methods: {
    handleCheckedAll(e) {
      this.$store.dispatch({ type: 'myBooks', data: { operation: 'checkedAll', checked: e.target.checked }, method: 'patch' })
    },
    handleDeleteChecked() {
      let ids = this.myBooks.filter(item => item.checked).map(item => item.id)
      this.$store.dispatch({ type: 'myBooks', data: { ids }, method: 'delete' })
    },
    handleOperation(operation) {
      this.operation = operation
    }
  }
}
</script>

<style>

</style>