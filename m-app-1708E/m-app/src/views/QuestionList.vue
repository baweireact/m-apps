<template>
  <div>
    <div v-for="(item,index) in questionList" :key="item.id" class="m-question-item">
      <div class="m-question">
        <span>{{index + 1}}、</span>
        <span v-html="item.question_text"></span>
      </div>
      <div>
        <div v-for="(optionValue, optionKey, index) in item.options_json" :key="index">
          <span>({{optionKey}})</span>
          <span v-html="optionValue"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../api'

export default {
  data() {
    return {
      questionList: []
    }
  },
  mounted() {
    Api.getQuestionList().then(res => {
      if (res.code === 200) {
        let data = res.data.rows
        data.forEach(item => {
          if (item.options_json) {
            item.options_json = JSON.parse(item.options_json)
          } else {
            item.options_json = {}
          }
          
        })
        this.questionList = data
      }
    })
  }
}
</script>

<style>
.m-question-item{ margin: 0 0 30px 0;}
.m-question{color: #f66f0c;}
</style>