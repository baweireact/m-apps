
let questionList = [
  {
    id: 0,
    question: '你会选择如何度过一个有趣的周末？',
    answerList: [{
      id: 0,
      text: '写代码',
      value: 'A'
    }, {
      id: 1,
      text: '逛街',
      value: 'B'
    }, {
      id: 2,
      text: '看电影',
      value: 'C'
    }]
  },
  {
    id: 1,
    question: '你爱吃什么？',
    answerList: [{
      id: 0,
      text: '火锅',
      value: 'A'
    }, {
      id: 1,
      text: '肯德基',
      value: 'B'
    }, {
      id: 2,
      text: '麻辣烫',
      value: 'C'
    }]
  },
]

module.exports = {
  lintOnSave: false,
  devServer: {
    before(app) {
      app.get('/api/question_list', (req, res) => {
        res.send({
          code: 200,
          data: questionList,
          message: '游戏人格测试题'
        })
      })
    }
  }
}