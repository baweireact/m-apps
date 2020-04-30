<template>
  <div>
    {{name_s}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'vue-property-decorator'

@Component
export default class TestComponent extends Vue {
  //@Prop() name!: string
  @PropSync('name') name_s!: string
}
</script>

<style>

</style>