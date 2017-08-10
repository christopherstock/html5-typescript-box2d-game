
var path = require('path');

module.exports = {
    entry: [
        './lib/index.js'
    ],
    output: {
        filename: 'bundled.js',
        path:     path.resolve(__dirname, 'dist/js')
    },
    devtool: 'source-map'
};
