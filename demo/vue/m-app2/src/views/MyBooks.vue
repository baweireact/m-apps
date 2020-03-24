<template>
  <div class="m-main m-my-books">
    <div v-for="book in myBooks" :key="book.id" class="m-my-books-item" @mousemove="handleMouseDown" >
      <div class="m-my-books-checkbox-wrap" >
        <input type="checkbox" :checked="book.checked" @click="handleCheck(book.id, $event)" class="m-my-books-checkbox" >
      </div>
      <div class="m-my-books-img-wrap">
        <img :src="book.avatar" class="m-my-books-img">
      </div>
      <div class="m-my-books-info" >
        <div>{{book.title}}</div>
        <div>￥{{book.price}}</div>
        <div class="m-add-info">
          <button class="m-btn" @click="handleSub(book.id)">减</button>
          <input type="text" :value="book.count" placeholder="数量" class="m-input" @input="handleInput(book.id, $event)">
          <button class="m-btn" @click="handleAdd(book.id)" >加</button>
        </div>        
      </div>
      <div class="m-my-books-delete">
        删除
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../api'

export default {
  computed: {
    myBooks() {
      return this.$store.state.myBooks
    }
  },
  methods: {
    handleCheck(id, e) {
      let myBooks = this.myBooks
      let index = myBooks.findIndex(item => item.id === id)
      myBooks[index].checked = e.target.checked
      this.$store.commit({ type: 'setState', key: 'myBooks', value: myBooks })
      Api.myBooks({ id, operation: 'checked', checked: e.target.checked }, 'patch').then(res => {
        if (res.code === 200) {
          this.$store.commit({ type: 'setState', key: 'myBooks', value: res.data })
        }
      })
    },
    handleAdd(id) {
      let myBooks = this.myBooks
      let index = myBooks.findIndex(item => item.id === id)
      myBooks[index].count++
      this.$store.commit({ type: 'setState', key: 'myBooks', value: myBooks })
      Api.myBooks({ id, operation: 'add' }, 'patch').then(res => {
        if (res.code === 200) {
          this.$store.commit({ type: 'setState', key: 'myBooks', value: res.data })
        }
      })
    },
    handleSub(id) {
      let myBooks = this.myBooks
      let index = myBooks.findIndex(item => item.id === id)
      if (myBooks[index].count > 1) {
        myBooks[index].count--
        this.$store.commit({ type: 'setState', key: 'myBooks', value: myBooks })
        Api.myBooks({ id, operation: 'sub' }, 'patch').then(res => {
        if (res.code === 200) {
          this.$store.commit({ type: 'setState', key: 'myBooks', value: res.data })
        }
      })
      }
    },
    handleInput(id, e) {
      let myBooks = this.myBooks
      let index = myBooks.findIndex(item => item.id === id)
      let count = e.target.value.replace(/[^\d]/g, '') - 0
      if (count === 0) {
        count = 1
      }
      myBooks[index].count = count
      this.$store.commit({ type: 'setState', key: 'myBooks', value: myBooks })
      Api.myBooks({ id, operation: 'replace', count }, 'patch').then(res => {
        if (res.code === 200) {
          this.$store.commit({ type: 'setState', key: 'myBooks', value: res.data })
        }
      })
    },
    handleMouseDown(e) {
      console.log(e)
    }
  }
}
</script>

<style>

</style>