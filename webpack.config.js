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
    },
    // ! this helps to find the original location of the error in console
    devtool: 'cheap-module-eval-source-map' ,
    // ! devServer takes incharge of building for webpack while giving the server abilities
    // ! it puts the bundle.js in the memory for fast loading 
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    }
};

// * loader - a file gets transformed when webpack uses it
// 