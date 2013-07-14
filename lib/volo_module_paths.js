var fs = require('fs')
var path = require('path')

module.exports = modulePaths
function modulePaths(callback){
  fs.readFile('package.json', function(err, contents){
    if (err) return callback(err)
    try{
      var config = JSON.parse('' + contents).volo
      var baseUrl = config.baseUrl || ''
      var deps = config.dependencies
      var modules = {}
      for (var dep in deps){
        modules[dep] = path.join(baseUrl, dep + '.js')
      }
      callback(null, modules)
    }catch(e){
      return callback(err)
    }
  })
}
