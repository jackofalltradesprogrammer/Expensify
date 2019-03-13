// entry  -> output where do we put it
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// heroku sets it up and for Jest(testing) we are using cross-env
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// dotenv is used to get values from config files to be passed to NODE_ENV
if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

// config file needs an absolute path that why we are using node path module
// we converted the object into function because webpack calls this function with env argument
// and we can set that one to production in the package.json file
module.exports = env => {
  // we use this determine what type of webPack sourceMap we need to use
  const isProduction = env === 'production';

  // the instance to get the CSS out of the bundle.js
  const CSSExtract = new ExtractTextPlugin('styles.css');

  console.log('env', env);
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
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
          use: CSSExtract.extract({
            use: [
              {
                // we provide an object for loader so that we can pass the options which will help set sourceMap to true
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      CSSExtract,
      // we need to pass api and evironment varaibles to bundle.js but we have to keep security in mind too
      // we are setting up variables for client side javascript and weback has a method
      // definePlugin actually takes string and not the value referenced by that string WITH QUOTES so we need to use JSON.stringfy
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(
          process.env.FIREBASE_API_KEY
        ),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
          process.env.FIREBASE_AUTH_DOMAIN
        ),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(
          process.env.FIREBASE_DATABASE_URL
        ),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(
          process.env.FIREBASE_PROJECT_ID
        ),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(
          process.env.FIREBASE_STORAGE_BUCKET
        ),
        'process.env.FIREBASE_MESSAGIND_SENDER_ID': JSON.stringify(
          process.env.FIREBASE_MESSAGIND_SENDER_ID
        )
      })
    ],
    // ! this helps to find the original location of the error in console
    // we are changing the sourceMap for dev as the CSS source map are not displaying correctly
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    // ! devServer takes incharge of building for webpack while giving the server abilities
    // ! it puts the bundle.js in the memory for fast loading and not in the public/dist folder
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      // to always serve up 404 unknown error, we will handle with server client routing and sends it back to html file where React-router takes care of it
      historyApiFallback: true,
      // We need to tell dev-server where to look for the src files
      publicPath: '/dist/'
    }

    // * loader - a file gets transformed when webpack uses it
    //
  };
};
