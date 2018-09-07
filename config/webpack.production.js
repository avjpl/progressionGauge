const path = require('path');
const merge = require('webpack-merge');

const {
  extractCSS,
  loadImages,
  loadFonts,
} = require('./webpack.parts')

module.exports = merge([
  {
    entry: './src/components/RadialGauge.js',
  },
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
