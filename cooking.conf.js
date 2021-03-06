var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: ['babel-polyfill', './src/main.js']
  },
  dist: './ROOT',
  template: './index.tpl',

  devServer: {
    port: 8080,
    publicPath: '/'
  },
  resolve: {
      alias: {vue: 'vue/dist/vue.js'}
  },
  // production
  clean: true,
  hash: true,
  sourceMap: true,
  minimize: true,
  chunk: true, // see https://cookingjs.github.io/zh-cn/configuration.html#chunk
  postcss: [
    // require('...')
  ],
  publicPath: '/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  alias: {
    'src': path.join(__dirname, 'src')
  },
  extends: ['vue2', 'less', 'autoprefixer']
  /*extends: ['vue2', 'lint', 'less', 'autoprefixer']*/
});

module.exports = cooking.resolve();
