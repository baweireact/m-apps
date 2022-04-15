const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  configureWebpack: (config) => {
    console.log('old webpackConfig', config)
    config.output.chunkFilename = 'js/[name]-legacy-[hash].js'
    if (process.env.VUE_APP_NODE_ENV === 'dev') {
      config.devtool = 'eval-source-map'
    } else {
      config.devtool = 'source-map'
    }
    console.log('new webpackConfig', config)
  },
})
