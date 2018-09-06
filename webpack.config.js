const merge = require('webpack-merge');

const commonConfig = require('./config/webpack.common')
const productionConfig = require('./config/webpack.production')
const developmentConfig = require('./config/webpack.development')

module.exports = mode => {
  process.env.BABEL_ENV = mode;

  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
}
