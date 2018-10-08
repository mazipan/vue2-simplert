const webpack = require('webpack')
const path = require('path')
const npm = require("./package.json")
const CompressionPlugin = require("compression-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  entry: {
    app: './src/main-dist.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'simplert.js',
    library: 'Simplert',
    libraryTarget: 'commonjs'
  },
  mode: 'production',
  optimization: {
    minimize: true
  },
  externals: {
    "vue": "Vue"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "simplert.css"
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    }),
    new webpack.BannerPlugin({
      banner: `Vue2-Simplert v.${npm.version}`
    }),
  ]
});
