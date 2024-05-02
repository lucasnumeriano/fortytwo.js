const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: ['./src/index.js', './src/components/Menu.js']
  },
  output: {
    filename: 'forty-two.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'FortyTwo',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};