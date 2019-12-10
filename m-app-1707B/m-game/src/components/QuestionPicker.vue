<template>
  <div>
    <div>{{question}}</div>
    <div v-for="(item, index) in currentList" :key="item.id">
      <Icon :active="item.checked" @click.native="handleSelect(index)"></Icon>
      {{item.text}}
    </div>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  computed: {
    question() {
      let questionList = this.$store.state.questionList
      let currentIndex = this.$store.state.currentIndex
      return questionList.length > 0 ? questionList[currentIndex].question : ''
    },
    currentList() {
      let questionList = this.$store.state.questionList
      let currentIndex = this.$store.state.currentIndex
      return questionList.length > 0 ? questionList[currentIndex].answerList : []
    }
  },
  components: {
    Icon
  },
  methods: {
    handleSelect(index) {
      //根据问题下标，和答案下标，修改仓库里的总数据
      let questionList = this.$store.state.questionList
      let currentIndex = this.$store.state.currentIndex
      questionList[currentIndex].answerList[index].checked = true
      //深拷贝， https://cn.vuejs.org/v2/guide/list.html#%E5%AF%B9%E8%B1%A1%E5%8F%98%E6%9B%B4%E6%A3%80%E6%B5%8B%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9
      questionList = JSON.parse(JSON.stringify(questionList))
      this.$store.commit({ type: 'setState', key: 'questionList', value: questionList })

      setTimeout(() => {
        //如果没答完，就是下一题，如果答完了，就是结果页
        if (currentIndex + 1 < questionList.length) {
          this.$store.commit({ type: 'setState', key: 'currentIndex', value: currentIndex + 1})
        } else {
          this.$router.push('/result')
        }
      }, 200)
    }
  },
  mounted() {
    this.$store.dispatch({ type: 'getQuestionList' })
  }
}
</script>

<style>

</style>