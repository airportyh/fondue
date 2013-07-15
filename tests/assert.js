function assert(condition, message) {
  if (!condition) {
    var msg = message || "Assertion failed"
    if (parent){
      parent.postMessage('not ok ' + msg, '*')
    }
    throw new Error(msg)
  }
}

function ok(){
  if (parent){
    parent.postMessage('ok', '*')
  }
  console.log('ok')
}