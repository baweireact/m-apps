<template>
  <div class="m-main m-home">
    <Sidebar></Sidebar>
    <List></List>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import Sidebar from '../components/Sidebar.vue'
import List from '../components/List.vue'

@Component({
  components: {
    Sidebar,
    List
  }
})
export default class Home extends Vue {
  @Action('list') list:any
  
  mounted() {
    this.list()
  }
}
</script>

<style>

</style>