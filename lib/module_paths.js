var fs = require('fs')
var path = require('path')
var async = require('async')
var empath = require('empath')


module.exports = modulePaths
function modulePaths(dir, callback){

  var moduleDefs = {}
  fs.readdir(dir, function(err, dirs){
    async.eachSeries(dirs, function(modname, next){
      var moddir = path.join(dir, modname)
      fs.stat(moddir, function(err, stat){
        if (err || !stat.isDirectory()){
          return next()
        }
        empath(moddir, function(err, results){
          if (err){
            console.error('error for', dir, err.message)
            next()
          }
          var main = path.join(moddir, results.main)
          moduleDefs[modname] = {
            main: main,
            format: chooseFormat(results)
          }
          next()
        })
      })
    }, function(){
      callback(null, moduleDefs)
    })
  })

}

function chooseFormat(info){
  if (info.commonjs) return 'commonjs'
  else if (info.amd) return 'amd'
  else return 'standalone'
}
