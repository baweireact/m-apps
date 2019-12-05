<template>
  <div id="app">
    <router-view/>
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from './components/Loading'

export default {
  components: {
    Loading
  }
}
</script>

<style>
</style>
