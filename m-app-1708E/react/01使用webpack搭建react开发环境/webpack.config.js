const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmeWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: __dirname + '/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle-[hash].js'
  },
  devServer: {
    inline: true,
    hot: true,
    port: 9000,
    contentBase: __dirname + '/dist',
    open: true
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
    new HtmeWebpackPlugin({
      template: __dirname + '/public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css'
    })
  ]
}