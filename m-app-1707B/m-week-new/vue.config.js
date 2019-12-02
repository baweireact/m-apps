const bodyParser = require('body-parser')

let weekList = [
  {
    id: 0,
    week: "星期一",
    checked: true,
    isIndeterminate: false,
    hours: [
      {
        hour: 1,
        checked: true
      },
      {
        hour: 2,
        checked: true
      },
      {
        hour: 3,
        checked: true
      },
      {
        hour: 4,
        checked: true
      },
      {
        hour: 5,
        checked: true
      }
    ]
  },
  {
    id: 1,
    week: "星期二",
    checked: true,
    isIndeterminate: false,
    hours: [
      {
        hour: 1,
        checked: true
      },
      {
        hour: 2,
        checked: true
      },
      {
        hour: 3,
        checked: true
      },
      {
        hour: 4,
        checked: true
      },
      {
        hour: 5,
        checked: true
      }
    ]
  }
]

module.exports = {
  devServer: {
    before(app) {
      app.use(bodyParser.json())

      app.get('/api/get_week_list', (req, res) => {
        res.send({
          code: 200,
          data: weekList,
          message: '星期列表'
        })
      })

      app.post('/api/update_week_list', (req, res) => {
        let { newWeekList } = req.body
        weekList = newWeekList
        res.send({
          code: 200,
          data: weekList,
          message: '更新成功'
        })
      })
    }
  }
}