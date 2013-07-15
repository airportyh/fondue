mocha.setup('tdd')
var assert = chai.assert

test('test volo load', function(done){
  testPage('basic.html', done)
})

test('test npm load', function(done){
  testPage('npm.html', done)
})

test('bower/qwery', function(done){
  testPage('bower.html', done)
})

test('jam/async', function(done){
  testPage('jam.html', done)
})

function testPage(page, done){
  var iframe = document.createElement('iframe')
  iframe.src = 'tests/' + page
  document.body.appendChild(iframe)
  once(window, 'message', function(msg){
    assert.equal(msg.data, 'ok')
    done()
  })
}

function once(target, evt, callback){
  var fun = function(){
    target.removeEventListener(evt, fun)
    callback.apply(this, arguments)
  }
  target.addEventListener(evt, fun)
}