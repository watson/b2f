'use strict'

module.exports = function (buf) {
  var out = new Buffer(buf.length * 4)
  for (var i = 0; i < buf.length; i++) {
    out.writeFloatLE(buf.readInt8(i) / 128, i * 4)
  }
  return out
}
