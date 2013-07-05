var config = {}

var fondue = {
  config: function(c){
    config = c
  }
}

function require(lib, parentModule){
  var path
  var module = findModule(lib, parentModule)
  if (module){
    path = getMain(module)
  }else{
    path = lib
  }
  if (!path.match(/\.js$/)) path += '.js'
  var code = readFile(path)

  var isAMD = !module && !!code.match(/define\(/)
  if (isAMD){
    console.log('AMD', path)
    return loadAMD(code, path, module)
  }else{
    return loadCommonJS(code, path, module)
  }
}

function loadAMD(code, path, parentModule){
  code = code + '\n//@ sourceURL=' + path
  var fn = new Function('define', 'eval(arguments[1])')
  var factory
  function define(f){
    factory = f
  }
  fn(define, code)
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

function findModule(lib, within){
  within = within || config
  return within[lib]
}

function findMainPath(lib, relativeTo){
  if (lib.substring(0, 2) === './'){
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