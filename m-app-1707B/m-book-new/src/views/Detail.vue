<template>
  <div>
    <img :src="detail.avatar" />
    <div>
      {{detail.summary}}
    </div>
    <div>
      <button v-if="detail.is_in_my_book">已收藏</button>
      <button v-else @click="handleAdd(detail)">收藏</button>
    </div>
  </div>
</template>

<script>
import Api from '../api'

export default {
  data() {
    return {
      detail: {}
    };
  },
  methods: {
    handleAdd(detail) {
      detail.count = 1
      Api.add({
        book: detail
      }).then(res => {
        if(res.code === 200) {
          //https://cn.vuejs.org/v2/guide/list.html#%E5%AF%B9%E8%B1%A1%E5%8F%98%E6%9B%B4%E6%A3%80%E6%B5%8B%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9
          //this.detail.is_in_my_book = true   //不推荐的写法
          //this.$set(this.detail, 'is_in_my_book', true)   //推荐的写法
          //this.detail = {...this.detail, is_in_my_book: true} //推荐的写法
          this.detail = Object.assign({}, this.detail, {is_in_my_book: true})
        }
      })
    }
  },
  mounted() {
    let { id } = this.$route.params;
    Api.getDetail(`?id=${id}`).then(res => {
      if (res.code === 200) {
        this.detail = res.data;
      }
    });
  }
};
</script>

<style>
</style>