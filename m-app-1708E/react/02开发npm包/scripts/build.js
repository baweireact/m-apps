const webpack = require('webpack');
const configFactory = require('../webpack.config.js');

process.env.NODE_ENV = 'production'
const config = configFactory('production')

const compiler = webpack(config);
compiler.run()