<template>
  <div>
    <DetailHeader :title="detail.title"></DetailHeader>
    <div class="m-detail-img-wrap">
      <img :src="detail.avatar" >
    </div>
    <div class="m-detail-add-info">
      <button class="m-btn" @click="handleSub">减</button>
      <input type="text" :value="detail.count" placeholder="数量" class="m-input" @input="handleInput">
      <button class="m-btn" @click="handleAdd" >加</button>
      <button class="m-btn" @click="handleAddToMyBooks">添加</button>
    </div>
  </div>
</template>

<script>
import DetailHeader from '../components/DetailHeader'
import Api from '../api'

export default {
  data() {
    return {
      detail: {}
    }
  },
  components: {
    DetailHeader
  },
  methods: {
    handleSub() {
      if (this.detail.count > 1) {
        this.detail.count--
      }
    },
    handleAdd() {
      this.detail.count++
    },
    handleInput(e) {
      let count = e.target.value.replace(/[^\d]/g, '') - 0
      if (count === 0) {
        count = 1
      }      
      this.detail = { ...this.detail, count }
    },
    handleAddToMyBooks() {
      let book = this.detail
      book.checked = true
      Api.myBooks({ book }, 'post').then(res => {
        if (res.code === 200) {
          this.$router.push('/index/my_books')
        } 
      })
    }
  },
  mounted() {
    let { id } = this.$route.params
    Api.detail(id).then(res => {
      if (res.code === 200) {
        let detail = res.data
        detail.count = 1
        this.detail = detail
      }
    })
  }
}
</script>

<style>

</style>