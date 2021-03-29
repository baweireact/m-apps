import Mock from 'mockjs'

let list = Mock.mock({
  "list|3": [
    {
      'id|+1': 0,
      'title': '@cname',
      "list": () => Mock.mock({
        "list|20": [
          {
            'id|+1': 1,
            'title': '@ctitle',
            'avatar': '@image(112x150, @color)',
          }
        ]
      }).list
    }
  ]
}).list

let data = Mock.mock({
  "list|10": [
    {
      'id|+1': 1,
      'name': '@cname',
      'title': '@ctitle',
      //'image': Mock.Random.image(null, '#ff0000', '#ffff00', 'hello'),
      'image': '@image(112x150, @color)',
      'paragraph': '@cparagraph',
      'datetime': '@datetime',
      "color": "@color()"
    }
  ]
}).list

Mock.mock("/api/mock", {
  code: 200,
  data: list,
  message: 'mock数据'
})