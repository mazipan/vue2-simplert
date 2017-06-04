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

var webpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: './src/vue2-simplert.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: 'vue2-simplert.js',
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: false
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.BannerPlugin((
    [
      " Vue2-Simplert v."+ npm.version +" \n",
      "(c) 2017 Irfan Maulana \n",
      "MIT License"
    ])
    .join(" ")),
    new WebpackShellPlugin({
      onBuildStart: ['echo "Starting"']
    })
  ]
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
