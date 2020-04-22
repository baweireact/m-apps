<template>
  <div class="m-footer">
    <router-link to="/index/home" class="m-footer-item">
      <Icon name="home" class="m-footer-icon"></Icon>
      <div class="m-footer-text">首页</div>
    </router-link>
    <router-link to="/index/my_books" class="m-footer-item">
      <Icon name="shubao" class="m-footer-icon"></Icon>
      <div class="m-footer-text">书包</div>
    </router-link>
    <router-link to="/index/me" class="m-footer-item">
      <Icon name="me" class="m-footer-icon"></Icon>
      <div class="m-footer-text">我的</div>
    </router-link>        
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Icon from './Icon.vue'

@Component({
  components: {
    Icon
  }
})
export default class Footer extends Vue {

}
</script>

<style>

</style>