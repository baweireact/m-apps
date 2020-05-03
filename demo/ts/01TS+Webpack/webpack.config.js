module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: [ ".ts" ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
}