var webpack = require('webpack')
var path = require('path')
var npm = require("./package.json")
const CompressionPlugin = require("compression-webpack-plugin")

require('es6-promise').polyfill();

module.exports = {
  entry: {
    umd: './src/main-dist.js',
    bundle: './src/simplert.es5.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'simplert.[name].js',
    library: 'Simplert',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    jsonpFunction: 'WebpackJsonp'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'css-loader'
      }
    ]
  },
  externals: {
    "vue": "Vue"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.BannerPlugin({
      banner: `Vue2-Simplert v.${npm.version}`
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ]
}
