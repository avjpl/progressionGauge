const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const WebpackMd5Hash = require('webpack-md5-hash');

const {
  extractCSS,
  loadImages,
  loadFonts,
} = require('./webpack.parts')

module.exports = merge([
  {
    entry: './index.js',
  },
  {
    output: {
      filename: 'react-svg-gauge.js',
    },
  },
]);
