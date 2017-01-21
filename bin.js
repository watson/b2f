#!/usr/bin/env node
'use strict'

var through2 = require('through2')
var pump = require('pump')
var b2f = require('./')

var transform = through2(function (chunk, env, cb) {
  cb(null, b2f(chunk))
})

pump(
  process.stdin,
  transform,
  process.stdout
)
