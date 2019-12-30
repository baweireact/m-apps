<template>
  <div>
    <img :src="detail.avatar"/>
    <Stars :count="detail.stars"></Stars>
  </div>
</template>

<script>
import axios from 'axios'
import Stars from '../components/Stars'

export default {
  data() {
    return {
      detail: {}
    }
  },
  components: {
    Stars
  },
  mounted(){
    let { id } = this.$route.params
    axios({
      url: `/api/detail?id=${id}`
    }).then(res => {
      if (res.data.code === 200) {
        this.detail = res.data.data
      }
    })
  }
}
</script>

<style>

</style>