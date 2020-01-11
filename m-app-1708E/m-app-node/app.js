const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const { bookNavData, bookMallData, bookMallDetailData, questionList } = require('./data')

let userList = [{
  id: 0,
  username: 'admin',
  password: '123456'
}, {
  id: 1,
  username: 'xu',
  password: '123'
}]

let myBook = []

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))

app.use((req, res, next) => {
  setTimeout(() => {
    next()
  }, 1000)
})

app.post('/api/login', (req, res) => {
  let { username, password } = req.body
  let user = userList.find(item => item.username === username)
  if (user) {
    if (user.password === password) {
      res.send({
        code: 200,
        data: { username },
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

app.get('/api/nav', (req, res) => {
  res.send({
    code: 200,
    data: bookNavData,
    message: '列表'
  })
})

app.get('/api/list', (req, res) => {
  let { id } = req.query
  let list = bookMallData.find(item => item.id == id).list
  list.forEach(item => {
    item.is_in_my_book = myBook.findIndex(book => book.id === item.id) >= 0
  })
  res.send({
    code: 200,
    data: list,
    message: '列表'
  })
})

app.get('/api/all_list', (req, res) => {
  res.send({
    code: 200,
    data: bookMallData,
    message: '全部列表数据'
  })
})

app.get('/api/detail/:id', (req, res) => {
  let { id } = req.params
  // bookMallDetailData.forEach(item => {
  //   item.list.forEach(book => {
  //     if (book.id == id) {
  //       book.is_in_my_book = myBook.findIndex(item => item.id === book.id) >= 0
  //       res.send({
  //         code: 200,
  //         data: book,
  //         message: '详情'
  //       })
  //       return
  //     }
  //     console.log('2')
  //   })
  //   console.log('遍历')
  // })
  for (let i = 0; i < bookMallDetailData.length; i++) {
    for (let j = 0; j < bookMallDetailData[i].list.length; j++) {
      let book = bookMallDetailData[i].list[j]
      if (book.id == id) {
        book.is_in_my_book = myBook.findIndex(item => item.id === book.id) >= 0
        res.send({
          code: 200,
          data: book,
          message: '详情'
        })
        return
      }
      console.log('内层循环:', j)
    }
    console.log('外层循环:', i)
  }
})

app.post('/api/add', (req, res) => {
  let { item } = req.body
  let index = myBook.findIndex(book => book.id === item.id)
  if (index >= 0) {
    myBook[index].checked = true
    myBook[index].count += item.count
  } else {
    item.checked = true
    myBook.push(item)
  }
  res.send({
    code: 200,
    data: myBook,
    message: '添加成功'
  })
})

app.get('/api/my_book', (req, res) => {
  res.send({
    code: 200,
    data: myBook,
    message: '书包'
  })
})

app.get('/api/banner', (req, res) => {
  fs.readdir(path.join(__dirname, 'public/images/banner'), (err, files) => {
    res.send({
      code: 200,
      data: files.map(item => "http://localhost:88/images/banner/" + item),
      message: 'banner'
    })
  })
})

app.post('/api/update', (req, res) => {
  let { myBookNew } = req.body
  myBook = myBookNew
  res.send({
    code: 200,
    data: myBook,
    message: '更新书包'
  })
})

app.get('/api/question_list', (req, res) => {
  res.send({
    code: 200,
    data: questionList,
    message: '问题列表'
  })
})

app.listen(88, () => {
  console.log(88)
})
