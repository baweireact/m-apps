<template>
  <div class="m-mask" :class="{active: visible}">
    <div class="m-dialog">
      <div class="m-header">{{title}}</div>
      <div class="m-content">
        <slot name="content"></slot>
      </div>
      <div class="m-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean
    },
    title: {
      type: String
    }
  }
}
</script>

<style>

</style>