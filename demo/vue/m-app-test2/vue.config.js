module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:81'
      }
    }
  }
}