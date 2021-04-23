<template>
  <div>
    <input type="checkbox" :id="item.id" :checked="item.done" @change="handleChange"/>
    <label :for="item.id">{{item.title}}</label>
    <button @click="handleDelete">删除</button>
  </div>
</template>

<script>
export default {
  props: ['item'],
  setup(props, context) {
    const handleChange = (e) => {
      context.emit('onChecked', { id: props.item.id, checked: e.target.checked })
    }

    const handleDelete = () => {
      context.emit('onDelete', { id : props.item.id })
    }
    return {
      handleChange,
      handleDelete
    }
  }
}
</script>

<style>

</style>