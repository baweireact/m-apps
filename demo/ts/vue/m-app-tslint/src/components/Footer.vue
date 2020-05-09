<template>
  <div class="m-footer">
    <router-link to="/index/home" class="m-footer-item">
      <Icon name="home" class="m-footer-icon"></Icon>
      <div class="m-footer-text">首页</div>
    </router-link>
    <router-link to="/index/my_books" class="m-footer-item">
      <Badge :count="count">
        <Icon name="shubao" class="m-footer-icon"></Icon>
      </Badge>
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
import { State, Action } from 'vuex-class'
import Icon from './Icon.vue'
import Badge from './Badge.vue'

@Component({
  components: {
    Icon,
    Badge
  }
})
export default class Footer extends Vue {
  @State(state => state.myBooks) myBooks!:[] 
  @Action('myBooksAction') myBooksAction!:Function

  get count() {
    let total = this.myBooks.reduce((total:number, item: any) => {
      return total + item.count
    }, 0)
    return total
  }

  mounted() {
    this.myBooksAction({ data: null, method: 'get' })
  }
}
</script>

<style>

</style>