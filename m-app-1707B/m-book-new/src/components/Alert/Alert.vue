<template>
  <div class="m-dialog-wrap" :class="{active: visible}">
    <div class="m-dialog">
      <div class="m-dialog-title">{{title}}</div>
      <div class="m-dialog-content">
        {{message}}
      </div>
      <div class="m-dialog-footer">
        <button @click="handleHideDialog">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      message: '',
      visible: true
    }
  },
  methods: {
    handleHideDialog() {
      this.visible = false
    }
  }
}
</script>

<style>
  
</style>