const path = require('path');
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const baseConfig = require('./webpack.config.base');

const NODE_ENV = process.env.NODE_ENV;

const setPath = function(folderName) {
  return path.join(__dirname, folderName);
}

const isDev = () => {
  return (NODE_ENV === 'development');
};

const setPublicPath = () => {
  return isDev() ? '/' : '/vue2-simplert/';
};

const extractHTML = new HtmlWebpackPlugin({
  title: 'History Search',
  filename: 'index.html',
  inject: true,
  template: setPath('/src/index.ejs'),
  minify: {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    html5: true,
    minifyCSS: true,
    removeComments: true,
    removeEmptyAttributes: true
  },
  environment: process.env.NODE_ENV
});

module.exports = merge(baseConfig, {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: isDev() ? path.resolve(__dirname) : setPath('dist'),
    publicPath: setPublicPath(),
    filename: isDev() ? '[name].js' : '[name].[hash].js'
  },
  plugins: [
    extractHTML,
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ]
});