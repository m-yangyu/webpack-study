const { parse } = require('@babel/parser');
const generate = require('@babel/generator');

class Compiler {
    constructor(code) {
        this.code = code;
        this.parserCode = '';
    }
    run() {
        this.parserCode = generate.default(parse(this.code, {
            sourceType: 'module',
            plugins: [
                'classStaticBlock',
            ]
        }));
    }
}

module.exports = Compiler;