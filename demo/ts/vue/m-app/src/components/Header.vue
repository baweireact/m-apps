<template>
  <div class="m-header">
    {{title1}}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class Header extends Vue {
  @State('title') title
  @State(state => {
    return state.title
  }) title1
}
</script>

<style>

</style>