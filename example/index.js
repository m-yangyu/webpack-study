const path = require('path');
const webpack = require('../src/index');

webpack({
    entry: path.resolve(__dirname, 'test.js'),
})