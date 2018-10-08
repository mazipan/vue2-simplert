const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const SRC = path.resolve(__dirname, 'src');
const NODE_ENV = process.env.NODE_ENV;

require('es6-promise').polyfill()

const isDev = () => {
  return (NODE_ENV === 'development');
};

module.exports = {
  mode: isDev() ? 'development' : 'production',
  optimization:{
    runtimeChunk: false,
    splitChunks: {
      chunks: "all",
    },
    // minimize: !isDev(),
    // minimizer: isDev() ? [
    //   new UglifyJsPlugin(),
    //   new OptimizeCSSAssetsPlugin({})
    // ] : []
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': SRC
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isDev()
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          isDev()
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          isDev()
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        isStaging: (isDev() || NODE_ENV === 'staging'),
        NODE_ENV: '"'+NODE_ENV+'"'
      }
    })
  ]
}
