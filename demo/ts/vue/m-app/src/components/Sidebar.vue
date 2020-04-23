<template>
  <div class="m-sidebar">
    <div v-for="item in list" :key="item.id" :class="[`m-sidebar-item ${currentId === item.id ? 'active' : '' }` ]" @click="handleNav(item.id)">
      {{item.title}}
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'

let timer

@Component
export default class Sidebar extends Vue {
  @State(state => state.list) list
  @State(state => state.currentId) currentId
  @Mutation('setState') setState

  handleNav(id) {
    this.setState({ key: 'currentId', value: id })
    document.getElementById(id).scrollIntoView({ block: 'start', behavior: 'smooth' })
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