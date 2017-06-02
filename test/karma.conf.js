// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../webpack/webpack.test.config')

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['Chrome'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        plugins: "transform-runtime"
      }
    },
    exclude: [
      '/**/dist/*.js',
      '/**/favicon/*.js',
      '/**/images/*.js',
      '/**/webpack/*.js'
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
      stats: {
        color: true,
        chunkModules: false,
        modules: false
      }
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    plugins: [
      'karma-babel-preprocessor',
      'karma-coverage',
      'karma-mocha',
      'karma-sinon-chai',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-webpack',
      //'karma-phantomjs-launcher',
      'karma-chrome-launcher',
    ],
    captureTimeout: 60000, // it was already there
    browserDisconnectTimeout : 10000,
    browserDisconnectTolerance : 1,
    browserNoActivityTimeout : 60000,//by default 10000
    concurrency: 1,
    logLevel: config.LOG_DEBUG
  })
}
