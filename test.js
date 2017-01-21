'use strict'

var test = require('tape')
var b2f = require('./')

test('empty', function (t) {
  t.equal(b2f(Buffer(0)).length, 0)
  t.end()
})

test('normal', function (t) {
  t.equal(b2f(Buffer('01020304', 'hex')).toString('hex'), '0000003c0000803c0000c03c0000003d')
  t.end()
})
