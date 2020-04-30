<template>
  <div class="m-detail-header">
    <Icon name="back" class="m-detail-header-icon" @onClick="handleBack"></Icon>
    <div class="m-detail-header-title">{{title}}</div>
    <Icon name="more" class="m-detail-header-icon"></Icon>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Icon from './Icon.vue'

@Component({
  components: {
    Icon
  }
})
export default class DetailHeader extends Vue {
  @Prop() title!: string

  handleBack() {
    (this as any).$router.go(-1)
  }
}
</script>
