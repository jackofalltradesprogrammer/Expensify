// entry  -> output where do we put it
const path = require('path');

// config file needs an absolute path that why we are using node path module
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // module has rules array to tell what it should do
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, // regex to tell when ever you see .js files run babel
            exclude: /node_modules/ // don't include js files in node_modules
        }]
    }
};

// * loader - a file gets transformed when webpack uses it
// 