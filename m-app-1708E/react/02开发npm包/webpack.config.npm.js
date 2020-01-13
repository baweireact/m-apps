const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function() {
  return {
    mode: 'production',
    // devtool: 'source-map',
    entry: __dirname + '/src/index_npm.js',
    output: {
      path: __dirname + '/dist_npm',
      filename: 'index.js',
      publicPath: '/',
      libraryTarget: 'umd'
    },
    resolve: {
      extensions: ['.js']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"]
            }
          },
          exclude: /node_modules/
        }, {
          test: /\.css$/,
          use: [{
            loader: MiniCssExtractPlugin.loader 
          }, {
            loader: 'css-loader'
          }]
        }]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ]
  }
}