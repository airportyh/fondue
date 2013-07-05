var fs = require('fs')
var async = require('async')
var path = require('path')

function traverseParents(dir, name, moduleDefs, callback){
  fs.readFile(path.join(dir, 'package.json'), function(err, contents){
    if (!err){
      var config = JSON.parse('' + contents)
      var main = config.main || 'index'
      //console.log(name, 'main:', main)
      var moduleDef = moduleDefs[name] = {
        main: path.join(dir, main),
        deps: {}
      }
      traverseDir(dir, moduleDef, moduleDefs)
    }else{
      var moduleDef = moduleDefs[name] = {
        deps: {}
      }
      traverseDir(dir, moduleDef, moduleDefs)
    }
  })

  function traverseDir(dir, moduleDef, moduleDefs){
    var nmpath = path.join(dir, 'node_modules')
    fs.readdir(nmpath, function(err, files){

      if (err){
        moduleDefs[name] = moduleDef.main
        return callback(null)
      }
      files = files.filter(function(file){
        return file.charAt(0) !== '.'
      })

      async.eachSeries(files, function(file, next){
        var modname = name + '/' + file
        var modpath = path.join(nmpath, file)
        //console.log(modname)
        traverseParents(modpath, file, moduleDef.deps, next)
      }, callback)

    })
  }
}



var moduleDefs = {}
traverseParents('./', '', moduleDefs, function(){
  var output = 'fondue.config(' + JSON.stringify(moduleDefs[''].deps, null, '  ') + ');'
  fs.writeFile('config.js', output)
})