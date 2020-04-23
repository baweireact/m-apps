<template>
  <div class="m-list" @scroll="handleScoll">
    <div v-for="category in list" :key="category.id" :id="category.id" class="js-list-item">
      <div class="m-category-title">{{category.title}}</div>
      <div v-for="book in category.list" :key="book.id" class="m-list-item">
        <div class="m-list-img-wrap">
          <img :src="book.avatar" class="m-list-img">
        </div>
        <div class="m-list-info">
          <div>{{book.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'

let topArr = []

@Component
export default class List extends Vue {
  @State(state => state.list) list
  @State(state => state.isRealScroll) isRealScroll
  @Mutation('setState') setState

  handleScoll(e) {
    let { scrollTop } = e.target
    scrollTop = scrollTop + 40
    if (this.isRealScroll) {
      for (let i = 0; i < topArr.length - 1; i++) {
        if (topArr[i] < scrollTop && scrollTop < topArr[i + 1]) {
          this.setState({ key: 'currentId', value: i })
        }
      }
    }    
  }

  updated() {
    topArr = Array.from(document.getElementsByClassName('js-list-item')).map(item => item.offsetTop)
    topArr.push(Infinity)
    console.log(topArr)
  }
}
</script>

<style>

</style>