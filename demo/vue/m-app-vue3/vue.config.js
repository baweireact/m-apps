module.exports = {
  lintOnSave: false,
  devServer: {
    open: true 
  },
  configureWebpack: (config) => {
    console.log(config.devtool)
    console.log(config)
    //config.devtool = "source-map"
    config.devtool = "source-map"
    console.log(config.devtool)
  }, 
  css: {
    sourceMap: true,
  }
}
