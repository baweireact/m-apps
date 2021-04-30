<template>
  <div class="m-category-item">
    <div class="m-category-img-wrap">
      <img :alt="book.title" :src="book.avatar" class="m-category-img" />
    </div>
    <div class="m-category-info">
      <div>{{ book.title }}</div>
      <Stars :number="book.stars"/>
      <button @click="handleShowDialog">添加</button>
    </div>
  </div>
</template>

<script>
import Stars from '@/components/light/Stars'
import { useStore } from 'vuex'

export default {
  props: {
    book: {
      type: Object,
    },
  },
  components: {
    Stars
  },
  setup(props) {
    const store = useStore()

    const handleShowDialog = () => {
      store.commit({ type: 'setLightState', key: 'isListDialogVisible', value: true })
      const book = props.book
      book.count = 1
      store.commit({ type: 'setLightState', key: 'addBook', value: book })
    }
    return {
      handleShowDialog
    }
  }
}
</script>

<style></style>
