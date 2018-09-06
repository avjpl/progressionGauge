const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { PATHS } = require('./webpack.constants');

const {
  loadJavaScript
} = require('./webpack.parts')

module.exports = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack demo',
        template: 'web/index.html',
      }),
    ],
  },
  loadJavaScript({ include: PATHS.app }),
]);
