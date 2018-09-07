const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { PATHS } = require('./webpack.constants');

const {
  loadJavaScript,
  logger,
} = require('./webpack.parts')

module.exports = mode => merge([
  loadJavaScript(),
]);
