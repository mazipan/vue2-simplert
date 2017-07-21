var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var npm = require("../package.json")
var WebpackShellPlugin = require('webpack-shell-plugin')

var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env

var webpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: './src/simplert.es5.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist',
    filename: 'simplert.bundle.js',
    library: 'Simplert',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: false
    })
  },
  devtool: '#source-map',
  externals: {
    // Use external version of Vue
    "vue": "Vue",
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new WebpackShellPlugin({
      onBuildStart: ['echo "Starting"']
    })
  ]
})

module.exports = webpackConfig
