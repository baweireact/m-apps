<template>
  <div 
    class="m-my-books-item"
    :class="[ index === operation.currentIndex && (operation.isShowOperation ? 'show-operation' : 'hide-operation') ]" 
    :style="{ transform: `translateX(${moved}px)` }"
    @touchstart="handleTouchStart($event, index)"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd($event, index)" >
    <div class="m-my-books-checkbox-wrap" >
      <input type="checkbox" :checked="book.checked" @click="handleChecked(book.id, $event)" class="m-my-books-checkbox" >
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
</template>

<script>
let touchStart, touchEnd

export default {
  props: {
    book: {
      type: Object
    },
    index: {
      type: Number
    },
    operation: {
      type: Object
    }
  },
  data() {
    return {
      moved: 0
    }
  },
  methods: {
    handleAdd(id) {
      this.$store.dispatch({ type: 'myBooks', data: { id, operation: 'add' }, method: 'patch' })
    },
    handleSub(id) {  
      this.$store.dispatch({ type: 'myBooks', data: { id, operation: 'sub' }, method: 'patch' })   
    },
    handleInput(id, e) {
      let myBooks = this.myBooks
      let count = e.target.value.replace(/[^\d]/g, '') - 0
      if (count === 0) {
        count = 1
      }
      this.$store.dispatch({ type: 'myBooks', data: { id, operation: 'inputCount', count }, method: 'patch' })
    },
    handleChecked(id, e) {
      this.$store.dispatch({ type: 'myBooks', data: { id, operation: 'checked', checked: e.target.checked }, method: 'patch' })
    },   
    handleTouchStart(e, index) {
      touchStart = e.changedTouches[0].pageX
      this.$emit('onOperation', { })
    },
    handleTouchMove(e) {
      //console.log('move', e)
      let currentPageX = e.changedTouches[0].pageX
      let moved = currentPageX - touchStart
      if (moved < 0 && Math.abs(moved) < 60) {
        this.moved = moved
      } else if (moved > 0 && this.moved < 0) {
        this.moved = -60 + moved
      }
      console.log(this.moved)
    },
    handleTouchEnd(e, index) {
      console.log('end', e)
      console.log(e.changedTouches[0].pageX)
      touchEnd = e.changedTouches[0].pageX
      if (touchStart - touchEnd > 0) {
        this.$emit('onOperation', { currentIndex: index, isShowOperation: true })
      } else if (touchStart - touchEnd < 0 ){
        this.$emit('onOperation', { currentIndex: index, isShowOperation: false })
      }
    },
    handleDelete(id) {
      this.$store.dispatch({ type: 'myBooks', data: { ids: [id] }, method: 'delete', callback: () => {
        this.operation = {}
      }})
    }
  }
}
</script>

<style>

</style>