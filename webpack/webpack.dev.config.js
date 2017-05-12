
require('es6-promise').polyfill();

module.exports = {

  entry: __dirname + '/../src/main.js',

  output: {
    path: __dirname + '/../dist/',
    publicPath: '../dist/',
    filename: 'vue2-simplert.browser.js',
    chunkFilename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ["es2015"]
        }
      },
      {
          test: /\.s[a|c]ss$/,
          loader: 'style!css!sass'
      }
    ]
  },

  vue: {
      loaders: {
          scss: 'style!css!sass'
      }
  },

};
