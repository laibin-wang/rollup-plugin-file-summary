# rollup-plugin-file-summary

[![Build Status](https://travis-ci.com/laibin-wang/rollup-plugin-file-summary.svg?branch=master)](https://travis-ci.com/laibin-wang/rollup-plugin-file-summary)
[![Codecov](https://codecov.io/gh/laibin-wang/rollup-plugin-file-summary/branch/master/graph/badge.svg)](https://codecov.io/gh/laibin-wang/rollup-plugin-file-summary)

Show your bundle files size.

![Plugin output screenshot](screenshot.png)

## Installation

```bash
# yarn
yarn add rollup-plugin-file-summary -D

# npm
npm install rollup-plugin-file-summary -D
```

## Usage

```js
// rollup.config.mjs
import fileSummary from 'rollup-plugin-file-summary'

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/app.js',
    format: 'iife'
  },
  plugins: [
    fileSummary()
  ]
}
```

## License

MIT
