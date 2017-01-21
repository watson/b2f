# b2f

Convert a series of 8-bit signed integers to 32-bit floats.

## Installation

Install globally to use from the command line:

```
npm install b2f --global
```

Install as dependency to use programmatically:

```
npm install b2f --save
```

## CLI Usage:

```
cat input.bin | b2f > output.bin
```

## Programmatic Usage:

```js
var b2f = require('b2f')

var input = new Buffer('01020304', 'hex')
var output = b2f(input)

console.log(output.toString('hex')) // 0000003c0000803c0000c03c0000003d
```

## API

### `var output = b2f(input)`

Returns a Buffer object four times the size of `input` with each byte
converted the a 32-bit float (little endian).

It's expected that each byte in `input` is of type 8-bit signed integer.

## License

MIT
