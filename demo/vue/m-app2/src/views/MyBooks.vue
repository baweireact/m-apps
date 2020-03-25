<template>
  <div class="m-main m-my-books">
    <div class="m-my-books-content">
      <div 
        v-for="(book, index) in myBooks" 
        :key="book.id" 
        class="m-my-books-item"
        :class="[ index === operation.currentIndex && (operation.isShowOperation ? 'show-operation' : 'hide-operation') ]" 
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd($event, index)" >
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
        <div class="m-my-books-delete" @click="handleDelete(book.id)">
          删除
        </div>
      </div>
    </div>
    <div class="m-my-books-footer">
      <label>
        <input type="checkbox" :checked="total.selectAll" >
        全选
      </label>
    </div>
  </div>
</template>

<script>
import Api from '../api'

let touchStart, touchEnd

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
      return {
        selectAll: myBooks.every(item => item.checked)
      }
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
    handleTouchStart(e) {
      console.log('start', e)
      console.log(e.changedTouches[0].pageX)
      touchStart = e.changedTouches[0].pageX
    },
    handleTouchMove(e) {
      //console.log('move', e)
      //console.log(e.changedTouches[0].pageX)
    },
    handleTouchEnd(e, index) {
      console.log('end', e)
      console.log(e.changedTouches[0].pageX)
      touchEnd = e.changedTouches[0].pageX
      if (touchStart - touchEnd > 0) {
        this.operation = { currentIndex: index, isShowOperation: true }
      } else if (touchStart - touchEnd < 0 ){
        this.operation = { currentIndex: index, isShowOperation: false }
      }
    },
    handleDelete(id) {
      Api.myBooks({ ids: [id] }, 'delete').then(res => {
        if (res.code === 200) {
          this.$store.commit({ type: 'setState', key: 'myBooks', value: res.data })
          this.operation = {}
        }
      })
    } 
  }
}
</script>

<style>

</style>