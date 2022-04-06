const baseURL = {
  // 使用反向代理解决跨域时，dev应为空字符串
  //dev: '',
  dev: 'http://10.3.138.173:81',
  //dev: 'http://test-zhiliao.gongzuoshouji.cn',
  test: 'http://api-zlhx.gongzuoshouji.cn',
  // 使用yarn build打包，所有接口使用这个url，需要服务器解决跨域
  prod: 'http://api-zlhx.gongzuoshouji.cn'
}['dev']

export { baseURL }
