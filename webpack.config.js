const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: ['./src/index.js']
  },
  output: {
    filename: 'my-library.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'MinhaBiblioteca',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};