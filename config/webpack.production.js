const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');

const {
  extractCSS,
} = require('./webpack.parts')

module.exports = merge([
  {
    entry: './src/components/RadialGauge.js',
  },
  extractCSS({
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]--[hash:base64:5]',
          camelCase: 'dashesOnly',
          sourceMap: true,
        },
      },
      'postcss-loader',
    ],
  }),
  {
    output: {
      path: path.resolve(__dirname, '..', 'dist'),
      filename: 'react-gauge.js',
      library: 'reactGauge',
      libraryTarget: 'umd',
    },
  },
  {
    externals: {
      react: 'react',
    }
  }
]);
