<template>
  <div>
    <DetailHeader :title="book.title"></DetailHeader>
    <div class="m-detail-img-wrap">
      <img :src="book.avatar">
    </div>
    <div class="m-detail-add-info">
      <button class="m-btn" @click="handleSub">减</button>
      <input type="text" :value="book.count" placeholder="数量" class="m-input" @input="handleInput">
      <button class="m-btn" @click="handleAdd" >加</button>
      <button class="m-btn" @click="handleAddToMyBooks">添加</button>
    </div>    
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import DetailHeader from '../components/DetailHeader.vue'
import Api from '../api'

@Component({
  components: {
    DetailHeader
  }
})
export default class Detail extends Vue {
  @Action('myBooksAction') myBooksAction!: Function

  book:any = { count: 1 }

  handleSub() {
    if (this.book.count > 1) {
      this.book.count--
    }
  }
  handleAdd() {
    this.book.count++
  }

  handleInput(e:any) {
    let count = e.target.value.replace(/[^\d]/g, '') - 0
    if (count === 0) {
      count = 1
    }      
    this.book = { ...this.book, count }
  }
  handleAddToMyBooks() {
    this.book.checked = true
    this.myBooksAction({ data: { book: this.book }, method: 'post',  callback: () => {
      (this as any).$router.push('/index/my_books')
    }})
  }

  mounted() {
    let { id } = (this as any).$route.params
    Api.getDetail(id).then(res => {
      if (res.code === 200) {
        let book = res.data
        book.count = 1
        this.book = res.data
      }
    })
  }
}
</script>

<style>

</style>