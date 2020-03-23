<template>
  <div class="m-list" @scroll="handleScroll">
    <div v-for="categroy in list" :key="categroy.id" :id="categroy.id" class="m-category js-category">
      <div class="m-category-title">{{categroy.title}}</div>
      <div v-for="book in categroy.list" :key="book.id" class="m-list-item">
        <div class="m-list-img-wrap">
          <img :src="book.avatar" class="m-list-img" >
        </div>
        <div class="m-info">
          {{book.title}}
          <Stars :count="book.stars"></Stars>
          <button @click="handleVisible(book)">添加</button>
        </div>
      </div>
    </div>
    <Dialog 
      :visible="visible"
      title="添加"
      @onCancel="handleCancel" 
      @onOk="handleOk" >
      <template v-slot:content>
        <div class="m-add-wrap">
          <div class="m-add-info">
            <button class="m-btn" @click="handleSub">减</button>
            <input type="text" :value="book.count" placeholder="数量" class="m-input" @input="handleInput">
            <button class="m-btn" @click="handleAdd" >加</button>
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Stars from './Stars'
import Dialog from './Dialog'
import Api from '../api'
let topArr = []

export default {
  data() {
    return {
      visible: false,
      book: {}
    }
  },
  computed: {
    list() {
      return this.$store.state.list
    }
  },
  components: {
    Stars,
    Dialog
  },
  methods: {
    handleScroll(e) {
      let { scrollTop } = e.target
      scrollTop = scrollTop + 40
      if (this.$store.state.isRealScroll) {
        for (let i = 0; i < topArr.length - 1; i++) {
          if (topArr[i] < scrollTop && scrollTop < topArr[i + 1]) {
            this.$store.commit({ type: 'setState', key: 'currentId', value: i })
          }
        }
      }
    },
    handleVisible(book) {
      this.visible = true
      book.count = 1
      this.book = book
    },
    handleCancel() {
      this.visible = false
    },
    handleOk() {
      this.handleCancel()
      let myBooks = this.$store.state.myBooks
      let index = myBooks.findIndex(item => item.id === this.book.id)
      if (index >= 0) {
        myBooks[index].count += this.book.count
      } else {
        myBooks.push({...this.book})
      }
      
      this.$store.commit({ type: 'setState', key: 'myBooks', value: myBooks })
      Api.myBooks({ book: this.book }, 'post')
    },
    handleAdd() {
      this.book.count++
      this.book = { ...this.book }
    },
    handleSub() {
      if (this.book.count > 1) {
        this.book.count--
        this.book = { ...this.book }
      }
    },
    handleInput(e) {
      this.book.count = e.target.value.replace(/[^\d]/g, '') - 0
      this.book = { ...this.book }
    }
  },
  updated() {
    topArr = Array.from(document.getElementsByClassName('js-category')).map(item => item.offsetTop)
    topArr.push(Infinity)
  }
}
</script>

<style>

</style>