<template>
  <div>
    <DetailHeader :title="detail.title"></DetailHeader>
    <div class="m-detail-img-wrap">
      <img :src="detail.avatar" >
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
  mounted() {
    let { id } = this.$route.params
    Api.detail(id).then(res => {
      if (res.code === 200) {
        this.detail = res.data
      }
    })
  }
}
</script>

<style>

</style>