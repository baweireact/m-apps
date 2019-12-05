<template>
  <div class="m-dialog-wrap" :class="{active: visible}">
    <div class="m-dialog">
      <div class="m-dialog-title">{{title}}</div>
      <div class="m-dialog-content">
        <slot></slot>
      </div>
      <div class="m-dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['visible', 'title']
}
</script>

<style>

</style>