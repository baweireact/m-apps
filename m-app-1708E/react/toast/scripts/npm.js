const webpack = require('webpack');
const configFactory = require('../webpack.config.npm.js');

const config = configFactory()

const compiler = webpack(config);
compiler.run()