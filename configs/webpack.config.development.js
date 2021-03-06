/*
 * filename: webpack.config.development.js
 * purpose: merge entry, output, module, and plugins with dev
 */

const webpack = require('webpack')
const merge = require('webpack-merge')

const common = require('./webpack.config.common.js')
const entry = require('./webpack.entry.js')
const modules = require('./webpack.module.js')
const output = require('./webpack.output.js')
const plugin = require('./webpack.plugin.js')

const devConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}

let config = merge(common, entry)
config = merge(config, modules)
config = merge(config, output)
config = merge(config, plugin)
config = merge(config, devConfig)

// console.log(config.module)

module.exports = config
