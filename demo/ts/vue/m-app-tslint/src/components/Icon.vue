<template>
  <span :class="[`icon iconfont icon-${name} ${className}`]" @click="handleClick"></span>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
class Icon extends Vue {
  @Prop({ default: 'zhanwei' })
  name!: string

  @Prop({ default: '' })
  className!: string

  @Emit('onClick')
  handleClick() {
    return { id: 2 }
  }
}

export default Icon
</script>