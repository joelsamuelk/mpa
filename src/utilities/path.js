/*
 * filename: path.js
 * purpose: resolve path related problems, base on application level
 *   configurations(app.config.js)
 * author: j-sparrow
 */

const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// get output path of .html pages from entry path of .hbs files
function calculateHtmlOutpath(inpath) {
  let outpath = ''
  outpath = path.resolve(__dirname, `${'../../dist/' + inpath.replace('.js', '.html')}`)

  return outpath
}

function getEntries(config) {
  var i = 0,
    len = config.entryPaths.length,
    entries = {}

  for (i = 0; i < len; i += 1) {
    let entryName = config.entryNames[i]
    let entryPath = config.entryPaths[i]
    entries[entryName] =
      path.resolve(__dirname, `../pages/${entryName}/` + entryPath)
  }

  return entries
}

// generate plugins depending on AppConfig
function generatePlugins(config) {
  var i = 0,
    len = config.entryPaths.length,
    plugins = []

  for (i = 0; i < len; i += 1) {
    let template = config.entryPaths[i]
    let pageName = config.entryNames[i]
    let len = template.length
    plugins.push(new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `../pages/${pageName}/index.html`),
      filename: path.resolve(__dirname, `../../dist/${pageName}/index.html`)
    }))
  }

  return plugins
}

function removePostfix(fullname) {
  // console.log(fullname)
  return fullname.split('.')[0]
}

// walk through a directory recursively, and return all files in tree structure
function walkDirSync(dir) {
  return fs.lstatSync(dir).isDirectory() ?
    fs.readdirSync(dir).map(file => walkDirSync(path.join(dir, file))) :
    dir;
}

// return in flat array
function walkDirSyncFlat(dir) {
  let fileTree = walkDirSync(dir),
    filesFlat = []

  function collectFile(name) {
    _.isArray(name) ? _.each(name, (item) => {
        collectFile(item)
      }) :
      filesFlat.push(name)
  }

  collectFile(fileTree)

  return filesFlat
}

module.exports = {
  calculateHtmlOutpath: calculateHtmlOutpath,
  getEntries: getEntries,
  generatePlugins: generatePlugins,
  removePostfix: removePostfix,
  walkDirSync: walkDirSync,
  walkDirSyncFlat: walkDirSyncFlat
}