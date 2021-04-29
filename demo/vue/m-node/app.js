const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const { bookMallData, bookMallDetailData } = require('./data')

const app = express()

let userList = [
  {
    id: 0,
    username: 'admin',
    password: '123456'
  },
  {
    id: 1,
    username: 'xu',
    password: '123'
  }
]

let myBooks = []

// app.use(history())
app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())

app.post('/api/login', (req, res) => {
  let { username, password } = req.body
  let user = userList.find(item => item.username === username)
  if (user) {
    if (user.password === password) {
      res.send({
        code: 200,
        data: {
          username
        },
        message: '登录成功'
      })
    } else {
      res.send({
        code: 400,
        message: '密码错误'
      })
    }
  } else {
    res.send({
      code: 400,
      message: '用户名不存在'
    })
  }
})

app.get('/api/list', (req, res) => {
  res.send({
    code: 200,
    data: bookMallData,
    message: '列表'
  })
})

//增
app.post('/api/my_books', (req, res) => {
  let { book } = req.body
  let index = myBooks.findIndex(item => item.id === book.id)
  if (index >= 0) {
    myBooks[index].count += book.count
  } else {
    myBooks.push(book)
  }
  
  res.send({
    code: 200,
    data: myBooks,
    message: '添加成功'
  })
})

//删
app.delete('/api/my_books', (req, res) => {
  let { ids } = req.body
  myBooks = myBooks.filter(item => !ids.includes(item.id))
  res.send({
    code: 200,
    data: myBooks,
    message: '删除成功'
  })
})

//查
app.get('/api/my_books', (req, res) => {
  res.send({
    code: 200,
    data: myBooks,
    message: '我的书包'
  })
})

//改
app.patch('/api/my_books', (req, res) => {
  let { id, operation, count, checked } = req.body
  let index = myBooks.findIndex(item => item.id === id)
  switch (operation) {
    case 'add':
      myBooks[index].count++
      break;
    case 'sub':
      if (myBooks[index].count > 1) {
        myBooks[index].count--
      }
      break;
    case 'inputCount':
      myBooks[index].count = count
      break;
    case 'checked':
      myBooks[index].checked = checked
      break;
    case 'checkedAll':
      myBooks.forEach(item => item.checked = checked)
      break
    default:
      break;
  }
  res.send({
    code: 200,
    data: myBooks,
    message: '更新成功'
  })
})

//详情
app.get('/api/detail/:id', (req, res) => {
  let { id } = req.params
  let detail = {}
  outer:
  for (let i = 0; i < bookMallDetailData.length; i++) {
    for (let j = 0; j < bookMallDetailData[i].list.length; j++) {
      if (bookMallDetailData[i].list[j].id == id) {
        detail = bookMallDetailData[i].list[j]
        break outer
      }
    }
  }
  res.send({
    code: 200,
    data: detail,
    message: '详情'
  })
})

//测试
app.post('/api/test', (req, res) => {
  let { title } = req.body
  res.send({
    state: 1,
    data: {
      title,
      name: 'vue 3.0'
    },
    message: '获取数据成功'
  })
})

app.listen(81, () => {
  console.log(81)
})








