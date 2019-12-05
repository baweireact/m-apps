<template>
  <div>
    <div v-for="item in list" :key="item.id">
      {{item.name}}
    </div>
  </div>
</template>

<script>
import Api from '../api'

export default {
  data() {
    return {
      list: [],
      page: 1
    }
  },
  mounted() {
    Api.news('?page=1&size=10').then(res => {
      if (res.code === 200) {
        this.list = res.data
      }
    })
  }
}
</script>

<style>

</style>