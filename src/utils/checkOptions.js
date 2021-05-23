const checkOptions = function(options) {
    if (!options.entry) {
        throw new Error('请输入webpack文件入口');
    }
}

module.exports = checkOptions;