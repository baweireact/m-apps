<template>
  <div class="m-main m-home">
    <Sidebar></Sidebar>
    <List></List>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import Sidebar from '../components/Sidebar.vue'
import List from '../components/List'

@Component({
  components: {
    Sidebar,
    List
  }
})
export default class Home extends Vue {
  @Action('list') list
  mounted() {
    this.list()
  }
}
</script>

<style>

</style>