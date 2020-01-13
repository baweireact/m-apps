const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const configFactory = require('../webpack.config.js');

process.env.NODE_ENV = 'development'

const options = {
  inline: true,
  hot: true,
  contentBase: __dirname + '/dist2',
  open: true,
  historyApiFallback: true,
  overlay: true,
  quiet: true
};

const config = configFactory('development')

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});
