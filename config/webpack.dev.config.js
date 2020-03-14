const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseConfig.externals.paths.dist,
    port: 9000,
    overlay: {
      warnings: false,
      errors: true,
    },
    // open: true
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
});

module.exports = new Promise(resolve => {
  resolve(devConfig);
});
