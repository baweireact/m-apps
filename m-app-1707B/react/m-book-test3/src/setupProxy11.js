const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://192.168.1.144:85',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api"
      }
    })
  )
}