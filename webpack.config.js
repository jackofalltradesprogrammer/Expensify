// entry  -> output where do we put it
const path = require('path');

// config file needs an absolute path that why we are using node path module
// we converted the object into function because webpack calls this function with env argument
// and we can set that one to production in the package.json file
module.exports = (env) => {
  // we use this determine what type of webPack sourceMap we need to use
  const isProduction = env === 'production';
  console.log('env', env);
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    // module has rules array to tell what it should do
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/, // regex to tell when ever you see .js files run babel
          exclude: /node_modules/ // don't include js files in node_modules
        },
        {
          test: /\.s?css$/, // regext to tell get .scss  and css files
          // ! CSS Loader convers css into javascript - Style Loader takes javascript css and adds to the dom with <style> tag
          // to provide arrays of loaders
          // ! sass-loader uses node-sass behinde the scenese to convert scss into css
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    // ! this helps to find the original location of the error in console
    devtool: isProduction? 'source-map' : 'cheap-module-eval-source-map',
    // ! devServer takes incharge of building for webpack while giving the server abilities
    // ! it puts the bundle.js in the memory for fast loading
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      // to always serve up 404 unknown error, we will handle with server client routing and sends it back to html file where React-router takes care of it
      historyApiFallback: true
    }

    // * loader - a file gets transformed when webpack uses it
    //
  };
};
