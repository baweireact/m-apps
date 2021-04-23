<template>
  <div>
    <div>正在进行({{doningList.length}})</div>
    <ListItem v-for="item in doningList" 
      :key="item.id" 
      :item="item"
      @onChecked="handleChecked"
      @onDelete="handleDelete"></ListItem>
    <div>已经完成({{doneList.length}})</div>
    <ListItem v-for="item in doneList" 
      :key="item.id" 
      :item="item"
      @onChecked="handleChecked"
      @onDelete="handleDelete"></ListItem>
  </div>
</template>

<script>
import { computed } from 'vue'
import ListItem from './ListItem'

export default {
  props: [ 'list' ],
  components: {
    ListItem
  },
  setup(props, context) {
    const doningList = computed(() => { 
      return props.list.filter(item => !item.done)
    })

    const doneList = computed(() => props.list.filter(item => item.done))

    const handleChecked = (payload) => {
      context.emit('onChecked', payload)
    }

    const handleDelete = (payload) => context.emit('onDelete', payload)

    return {
      doningList,
      doneList,
      handleChecked,
      handleDelete
    }
  }
}
</script>

<style>

</style>