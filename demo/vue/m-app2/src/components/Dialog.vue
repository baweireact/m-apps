<template>
  <div class="m-dialog-wrap" :class="visibleDelay && 'active'">
    <div class="m-dialog" :class="visible ? 'fade-in' : 'fade-out'">
      <div class="m-dialog-header">
        {{title}}
      </div>
      <div class="m-dialog-content">
        <slot name="content"></slot>
      </div>
      <div class="m-dialog-footer">
        <button class="m-btn" @click="handleCancel" >取消</button>
        <button class="m-btn" @click="handleOk" >确定</button>
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
      type: String,
      default: '标题'
    }
  },
  data() {
    return {
      visibleDelay: false
    }
  },
  watch: {
    visible() {
      if (this.visible) {
        this.visibleDelay = true
      } else {
        setTimeout(() => {
          this.visibleDelay = false
        }, 200)
      }
    }
  },
  methods: {
    handleCancel() {
      this.$emit('onCancel')
    },
    handleOk() {
      this.$emit('onOk')
    }
  }
}
</script>