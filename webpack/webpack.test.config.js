var webpack = require('webpack');
var path = require('path');
var npm = require("../package.json");

require('es6-promise').polyfill();


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {

  devtool: '#inline-source-map',

  output: {
    path: __dirname + '/../dist/',
    publicPath: '../dist/',
    filename: 'vue2-simplert.demo.js',
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

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"testing"'
      }
    }),
    new webpack.ContextReplacementPlugin(/sinon/, /^$/)
  ]

};
