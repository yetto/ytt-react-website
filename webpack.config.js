var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// http://javascriptplayground.com/blog/2016/07/css-modules-webpack-react/
// http://hugogiraudel.com/2015/06/18/styling-react-components-in-sass/

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./app/client.jsx",
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader?presets[]=es2015'
        }, {
            test: /\.jsx$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
            }
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        }]
    },
    plugins: debug ? [
        new ExtractTextPlugin("./dist/css/main.css", {
            allChunks: true
        })
    ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
        new ExtractTextPlugin("../dist/css/main.css", {
            allChunks: true
        })
    ],
    output: {
        path: __dirname,
        filename: "/dist/js/client.min.js"
    }

};


/*
{
    test: /\.(jpe?g|png|gif|svg)$/i,
    loader: "file-loader?name=dist/imgs/[name].[ext]"
}
*/