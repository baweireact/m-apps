<template>
  <div class="m-list" @scroll="handleScoll">
    <div v-for="category in list" :key="category.id" :id="category.id" class="js-list-item">
      <div class="m-category-title">{{category.title}}</div>
      <div v-for="book in category.list" :key="book.id" class="m-list-item" @click="handleDetail(book.id)">
        <div class="m-img-wrap">
          <img v-lazy="book.avatar" class="m-img">
        </div>
        <div class="m-list-info">
          <div>{{book.title}}</div>
          <Stars :count="book.stars"></Stars>
          <button @click.stop="handleShowDialog(book)">添加</button>
        </div>
      </div>
    </div>
    <Dialog title="添加" :visible="visible" @onCancel="handleCancel" @onOk="handleAddToMyBooks">
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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Mutation, Action } from 'vuex-class'
import { IBook } from '../types'
import Stars from './Stars.vue'
import Dialog from './Dialog.vue'
import Api from '../api'

let topArr:number[] = []

@Component({
  components: {
    Stars,
    Dialog
  }
})
export default class List extends Vue {
  @State(state => state.list) list!:any[]
  @State(state => state.isRealScroll) isRealScroll!:boolean
  @Mutation('setState') setState!:Function
  @Action('myBooksAction') myBooksAction!:Function

  visible = false

  //@ts-ignore
  book:IBook = { count: 1 }

  handleScoll(e:any) {
    let scrollTop = e.target.scrollTop
    scrollTop = scrollTop + 40
    if (this.isRealScroll) {
      for (let i = 0; i < topArr.length - 1; i++) {
        if (topArr[i] < scrollTop && scrollTop < topArr[i + 1]) {
          this.setState({ key: 'currentId', value: i })
        }
      }
    }    
  }

  handleShowDialog(book:IBook) {
    this.visible = true
    book.count = 1
    this.book = book
  }

  handleCancel() {
    this.visible = false
  }

  handleAddToMyBooks() {
    this.book.checked = true
    this.myBooksAction({ data: { book: this.book}, method: 'post', callback: this.handleCancel })
  }

  handleAdd() {
    this.book.count++
    this.book = { ...this.book }
  }  

  handleSub() {
    if (this.book.count > 1) {
      this.book.count--
      this.book = { ...this.book }
    }
  }
  
  handleInput(e:any) {
    let count = e.target.value.replace(/[^\d]/g, '') - 0
    if (count === 0) {
      count = 1
    }
    this.book.count = count
    this.book = { ...this.book }
  }

  handleDetail(id:number) {
    (this as any).$router.push(`/detail/${id}`)
  }

  updated() {
    topArr = Array.from(document.getElementsByClassName('js-list-item')).map((item:any) => item.offsetTop)
    topArr.push(Infinity)
    console.log(topArr)
  }
}
</script>

<style>

</style>