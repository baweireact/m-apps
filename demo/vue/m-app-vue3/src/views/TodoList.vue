<template>
  <div>
    <Header @onAdd="handleAdd"></Header>
    <List :list="state.list" @onChecked="handleChecked" @onDelete="handleDelete"></List>
  </div>
</template>

<script>
import { reactive } from 'vue'
import Header from '../components/Header'
import List from '../components/List'

export default {
  components: {
    Header,
    List
  },
  setup() {
    const state = reactive({
      list: []
    })

    const handleAdd = (title) => {
      state.list.push({
        id: Date.now(),
        title,
        done: false
      })
    }

    const handleChecked = (payload) => {
      let index = state.list.findIndex(item => item.id === payload.id)
      state.list[index].done = payload.checked
    }

    const handleDelete = (payload) => {
      state.list = state.list.filter(item => item.id !== payload.id)
    }

    return {
      state,
      handleAdd,
      handleChecked,
      handleDelete
    }
  }
}
</script>

<style>

</style>