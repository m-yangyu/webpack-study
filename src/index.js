const checkOptions = require('./utils/checkOptions.js');
const { readFile } = require('./utils/index');
const Compiler = require('./compiler/index');

const webpack = function(options) {
    checkOptions(options);
    readFile(options.entry).then((res) => {
        console.log(res);
        const compiler = new Compiler(res);
        compiler.run(res);
        console.log(compiler.parserCode);
    })
};

module.exports = webpack;
