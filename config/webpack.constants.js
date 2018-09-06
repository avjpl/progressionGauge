const path = require('path');

exports.PORT = 8080;
exports.PATHS = {
  root: path.resolve(__dirname, '..'),
  src: path.resolve(__dirname, '..', 'src'),
  dist: path.resolve(__dirname, '..', 'dist'),
};
