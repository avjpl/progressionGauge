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
    plugins: [
      new WebpackMd5Hash(),
    ],
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
  loadImages({
    options: {
      limit: 15000,
      name: '[name].[ext]',
    },
  }),
  loadFonts({
    name: 'fonts/[name].[ext]'
  }),
  {
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'initial',
          },
        },
      },
    },
  },
]);
