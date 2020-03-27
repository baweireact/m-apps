<template>
  <div 
    class="m-my-books-item"
    :class="[ !operation.isRemoveClass && (operation.isShowOperation ? 'show-operation' : 'hide-operation') ]" 
    :style="{ transform: `translateX(${moved}px)` }"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd" >
    <div class="m-my-books-checkbox-wrap" >
      <input type="checkbox" :checked="book.checked" @click="handleChecked(book.id, $event)" class="m-my-books-checkbox" >
    </div>
    <div class="m-my-books-img-wrap">
      <img :src="book.avatar" class="m-my-books-img">
    </div>
    <div class="m-my-books-info">
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
let touchStart, touchEnd, timer1, timer2

export default {
  props: {
    book: {
      type: Object
    }
  },
  data() {
    return {
      moved: 0,
      operation: {}
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
    handleTouchStart(e) {
      touchStart = e.changedTouches[0]
      this.operation = { isRemoveClass: true }
    },
    handleTouchMove(e) {
      let current = e.changedTouches[0]
      let moved = current.pageX - touchStart.pageX
      if (moved >= -60 && moved < 0 && Math.abs(moved) > 1 && this.moved !== -60) {
        this.moved = moved
      } else if (moved > 0 && moved <= 60 && Math.abs(moved) > 1 && this.moved !== 0) {
        this.moved = -60 + moved
      }
    },
    handleTouchEnd(e) {
      touchEnd = e.changedTouches[0]
      if (touchStart.pageX - touchEnd.pageX > 0) {
        this.operation = { isRemoveClass: false, isShowOperation: true }
        clearTimeout(timer1)
        timer1 = setTimeout(() => {
          this.moved = -60
        }, 500)
      } else if (touchStart.pageX - touchEnd.pageX < -0 ) {
        this.operation = { isRemoveClass: false, isShowOperation: false }
        clearTimeout(timer2)
        timer2 = setTimeout(() => {
          this.moved = 0
        }, 500)
      }
    },
    handleDelete(id) {
      this.$store.dispatch({ type: 'myBooks', data: { ids: [id] }, method: 'delete' })
    }
  }
}
</script>

<style>

</style>