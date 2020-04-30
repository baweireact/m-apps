<template>
  <div>
    <Icon v-for="n in 5" :key="n" name="star" :class="[`m-star ${n <= count ? 'active' : ''}`]"></Icon>
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
export default class Stars extends Vue {
  @Prop() count!:number
}
</script>

<style>

</style>