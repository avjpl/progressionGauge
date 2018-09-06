const webpack = require('webpack')
const merge = require('webpack-merge');
const Jarvis = require('webpack-jarvis');

const {
  devServer,
  loadCSS,
  loadImages,
  generateSourceMaps,
} = require('./webpack.parts');

module.exports = merge([
  {
    plugins: [
      new Jarvis({
        port: 1337 // optional: set a port
      }),
    ],
  },
  devServer({
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 3300,
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
