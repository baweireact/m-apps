<template>
  <div class="m-my-books-item">
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

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

@Component
export default class MyBookItem extends Vue {
  @Prop() book!:any
  @State(state => state.myBooks) myBooks!: any[]
  @Action('myBooksAction') myBooksAction!:Function

  handleAdd(id) {
    this.myBooksAction({ data: { id, operation: 'add' }, method: 'patch' })
  }
  handleSub(id) {  
    this.myBooksAction({ data: { id, operation: 'sub' }, method: 'patch' })   
  }
  handleInput(id:number, e:any) {
    let myBooks = this.myBooks
    let count = e.target.value.replace(/[^\d]/g, '') - 0
    if (count === 0) {
      count = 1
    }
    this.myBooksAction({ data: { id, operation: 'inputCount', count }, method: 'patch' })
  }
  handleChecked(id:number, e:any) {
    this.myBooksAction({ data: { id, operation: 'checked', checked: e.target.checked }, method: 'patch' })
  }   
  handleDelete(id) {
    this.myBooksAction({ data: { ids: [id] }, method: 'delete' })
  }    
}
</script>

<style>

</style>