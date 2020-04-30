<template>
  <div :class="[`m-dialog-wrap ${visible ? 'active' : ''}`]">
    <div class="m-dialog">
      <div class="m-dialog-header">{{title}}</div>
      <div class="m-dialog-content">
        <slot name="content"></slot>
      </div>
      <div class="m-dialog-footer">
        <button class="m-btn" @click="handleCancel">取消</button>
        <button class="m-btn" @click="handleOk">确定</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export default class Dialog extends Vue {
  @Prop() visible!: boolean
  @Prop() title!: string

  @Emit('onCancel')
  handleCancel() {

  }

  @Emit('onOk')
  handleOk() {

  }
}
</script>

<style>

</style>