const webpack = require('webpack')
const merge = require('webpack-merge');
const Jarvis = require('webpack-jarvis');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
  devServer,
  loadCSS,
  loadImages,
  generateSourceMaps,
} = require('./webpack.parts');

const { PORT } = require('./webpack.constants');

module.exports = merge([
  {
    plugins: [
      new Jarvis({
        port: 1337 // optional: set a port
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack demo',
        template: 'web/index.html',
      }),
    ],
  },
  devServer({
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || PORT,
  }),
  {
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  },
  loadCSS({
    use: [
      'style-loader',
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
  loadImages(),
  generateSourceMaps({ type: 'cheap-module-source-map' }),
]);
