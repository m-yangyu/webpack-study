const fs = require('fs');

const readFile = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            if (err) {
                reject(new Error(err));
            }
            resolve(data.toString('utf-8'));
        })
    })
}

module.exports = {
    readFile,
}