const merge = require('webpack-merge');

const {
  loadJavaScript,
} = require('./webpack.parts')

module.exports = mode => merge([
  loadJavaScript(),
]);
