<template>
  <div>
    <input type="text" v-model="title" @keyup.enter="handleAdd" autofocus placeholder="请输入">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  emits: ['onAdd'],
  setup(props, context) {
    const title = ref('')
    const handleTitle = (e) => {
      title.value = e.target.value
    }

    const handleAdd = () => {
      context.emit('onAdd', title.value)
      title.value = ''
    }

    return {
      title,
      handleTitle,
      handleAdd
    }
  }
}
</script>

<style>

</style>