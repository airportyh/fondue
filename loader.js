var config = {}

var fondue = {
  config: function(c){
    config = c
  }
}

function require(lib, parentModule){
  var path, format, module
  var moduleAndFormat = getModuleAndFormat(lib, parentModule)
  if (moduleAndFormat){
    module = moduleAndFormat.module
    path = getMain(module)
    format = moduleAndFormat.format
  }else if (isRelative(lib)){
    path = lib
    format = 'commonjs'
  }else{
    throw new Error('Cannot resolve module ' + lib)
  }
  format = format || 'commonjs'
  if (!path.match(/\.js$/)) path += '.js'
  var code = readFile(path)

  if (format === 'amd'){
    return loadAMD(code, path, module)
  }else if (format === 'commonjs'){
    return loadCommonJS(code, path, module)
  }else{
    throw new Error('Dont know what to do with format ' + format)
  }
}

var toString = Object.prototype.toString

function loadAMD(code, path){
  code = code + '\n//@ sourceURL=' + path
  var fn = new Function('define', 'eval(arguments[1])')
  var factory, dependencies
  function define(id, deps, callback){
    if (typeof id !== 'string'){
      callback = deps
      deps = id
    }
    if (toString.call(deps) !== '[object Array]'){
      callback = deps
    }
    factory = callback
    dependencies = deps
  }
  define.amd = {}
  fn(define, code)
  // TODO: apply dependencies
  return factory()
}

function loadCommonJS(code, path, parentModule){
  code = code + '\n//@ sourceURL=' + path
  var fn = new Function('require', 'exports', 'module', 'eval(arguments[3])')
  var exports = {}
  var module = {
    exports: exports
  }
  function req(lib){
    return require(lib, parentModule && parentModule.deps)
  }
  fn(req, exports, module, code)
  return module.exports
}

function getModuleAndFormat(lib, within){
  if (within){
    var module = within[lib]
    return {
      module: within[lib], 
      format: module.format
    }
  }
  for (var key in config){
    var packager = config[key]
    var modules = packager.modules
    if (lib in modules){
      var module = modules[lib]
      var format = module.format || packager.format
      return {
        module: module,
        format: format
      }
    }
  }
}

function findMainPath(lib, relativeTo){
  if (isRelative(lib)){
    return lib + '.js'
  }else{
    if (lib in config){
      return getMain(config[lib])
    }
  } 
}

function getMain(module){
  if (typeof module === 'string'){
    return module
  }else{
    return module.main
  }
}

function isRelative(path){
  return path.substring(0, 2) === './'
}

function basepath(path){
  var parts = path.split('/')
  parts[parts.length - 1] = ''
  return parts.join('/')
}

function readFile(url){
  var xhr = new XMLHttpRequest
  xhr.open('GET', url, false)
  xhr.send(null)
  if (xhr.status === 404) throw Error('File not found: ' + url)
  return xhr.responseText
}