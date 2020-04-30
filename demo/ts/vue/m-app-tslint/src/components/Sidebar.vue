<template>
  <div class="m-sidebar">
    <div v-for="item in list" :key="item.id" :class="[`m-sidebar-item ${currentId === item.id ? 'active' : '' }` ]" @click="handleNav(item.id)">
      {{item.title}}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'

let timer: any

@Component
export default class Sidebar extends Vue {
  @State(state => state.list) list!:any[]
  @State(state => state.currentId) currentId!:number
  @Mutation('setState') setState!:any

  handleNav(id:number) {
    this.setState({ key: 'currentId', value: id });
    (document as any).getElementById(id + '').scrollIntoView({ block: 'start', behavior: 'smooth' })
    clearTimeout(timer)
    this.setState({ key: 'isRealScroll', value: false })
    timer = setTimeout(() => {
      this.setState({ key: 'isRealScroll', value: true })
    }, 1000)
  }
}
</script>

<style>

</style>