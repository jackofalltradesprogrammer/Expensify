// entry  -> output where do we put it
const path = require('path');

// config file needs an absolute path that why we are using node path module
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};