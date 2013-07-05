function require(lib, relativeTo){
  var path = findMainPath(lib, relativeTo)
  var code = readFile(path)

  var isAMD = !!code.match(/define\(/)
  if (isAMD){
    return loadAMD(code, path)
  }else{
    return loadCommonJS(code, path)
  }
}

function loadAMD(code, path){
  code = code + '\n//@ sourceURL=' + path
  var fn = new Function('define', 'eval(arguments[1])')
  var factory
  function define(f){
    factory = f
  }
  fn(define, code)
  return factory()
}

function loadCommonJS(code, path){
  code = code + '\n//@ sourceURL=' + path
  var fn = new Function('require', 'exports', 'module', 'eval(arguments[3])')
  var exports = {}
  var module = {
    exports: exports
  }
  function req(lib){
    return require(lib, basepath(path))
  }
  fn(req, exports, module, code)
  return module.exports
}

function findMainPath(lib, relativeTo){
  if (relativeTo){
    var config = JSON.parse(readFile(relativeTo + '/node_modules/' + lib + '/package.json'))
    var main = config.main
    var path = relativeTo + 'node_modules/' + lib + '/' + main
    console.log('found main: ' + path)
    return path
  }else{
    console.log('findMainPath', lib, relativeTo)
    if (lib.substring(0, 2) === './'){
      return lib + '.js'
    }
    var config = JSON.parse(readFile('/node_modules/' + lib + '/package.json'))
    var main = config.main
    var path = '/node_modules/' + lib + '/' + main
    console.log('found main: ' + path)
    return path
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