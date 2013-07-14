#! /usr/bin/env node

var fs = require('fs')
var modulePaths = require('./lib/module_paths')
var nodeModulePaths = require('./lib/node_module_paths')
var voloModulePaths = require('./lib/volo_module_paths')
var async = require('async')

var config = {}

voloModulePaths(function(err, paths){
  config.volo = {
    format: 'amd',
    modules: paths
  }
  modulePaths('bower_components', function(err, paths){
    config.bower = {
      modules: paths
    }
    modulePaths('jam', function(err, paths){
      for (var key in paths){
        paths[key] = paths[key].main
      }
      config.jam = {
        format: 'amd',
        modules: paths
      }
      nodeModulePaths(function(err, paths){
        config.npm = {
          format: 'commonjs',
          modules: paths
        }
        var json = JSON.stringify(config, null, '  ')
        var output = 'fondue.config(' + json + ');'
        fs.writeFile('config.js', output)
      })
    })
  })
})