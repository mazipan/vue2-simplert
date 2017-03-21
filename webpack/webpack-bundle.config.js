
var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('es6-promise').polyfill();

var npm = require("../package.json");

module.exports = {

  entry: __dirname + '/../src/simplert.js',

  output: {
    path: __dirname + '/../dist/',
    publicPath: '../dist/',
    filename: 'vue2-simplert.js',
    libraryTarget: "umd",
    library: "Simplert"
  },

  externals: {
    "vue": "Vue"
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
          presets: ["es2015"],
          plugins: ["transform-object-rest-spread","transform-vue-jsx"]
        }
      },

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
      },

      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
      },

      {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
      },

      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  },

  vue: {
      loaders: {
          scss: 'style!css!sass'
      }
  },

  plugins: [

    new webpack.BannerPlugin((
      [
        " @author: Irfan Maulana \n",
        " vue2-simplert v."+ npm.version +" \n",
        " https://github.com/mazipan/vue2-simplert",
        " \n"
      ])
      .join(" ")),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

  ]

};
