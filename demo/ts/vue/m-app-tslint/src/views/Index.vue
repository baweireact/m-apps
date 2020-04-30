<template>
  <div class="m-wrap">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Index extends Vue {
  
}
</script>

<style>

</style>