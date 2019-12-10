<template>
  <div>
    <div>
      {{username}}
    </div>
    <div v-for="(question, index) in questionList" :key="question.id">
      {{index + 1}}:
      <span v-for="answer in question.answerList" :key="answer.id">
        <span v-if="answer.checked">{{answer.value}}</span>
      </span>
    </div>
    <button @click="handleRestart">重新开始</button>
  </div>
</template>

<script>
export default {
  computed: {
    questionList() {
      return this.$store.state.questionList
    },
    username() {
      return this.$store.state.username
    }
  },
  methods: {
    handleRestart() {
      this.$store.commit({ type: 'setState', key: 'currentIndex', value: 0 })
      this.$router.push('/home')
    }
  }
}
</script>

<style>

</style>