const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmeWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = function(webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';

  return {
    mode: 'development',
    devtool: 'source-map',
    entry: __dirname + '/src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle-[hash].js',
      publicPath: '/'
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
            loader: isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader 
          }, {
            loader: 'css-loader'
          }]
        }]
    },
    plugins: [
      new HtmeWebpackPlugin({
        template: __dirname + '/public/index.html'
      }),
      isEnvDevelopment ? () => {} : new MiniCssExtractPlugin({
        filename: '[name]-[hash].css'
      }),
      new CleanWebpackPlugin()
    ]
  }
}