<template>
  <div>
    {{book.title}}
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object
    }
  },
  updated() {
    console.log('孙组件更新完')
  },
  mounted() {
    console.log('孙组件挂载完')
  }
}
</script>

<style>

</style>