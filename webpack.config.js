var webpack = require('webpack');
module.exports = {
    entry: "./src/relaymark.model.js",
    output: {
        path: "dist",
        filename: "relaymark.model.js",
        library: "relaymark.model",
        libraryTarget: 'umd'
    },
    target: "web",
    module: {
        loaders: [
            {
                test: /src.*\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
/*    resolve: {
        alias: [
            {
                ngStorage: "ngStorage"
            }
        ]

    },*/
    externals: [{ angular: "angular", 'ngStorage': true}], //
    plugins : [
        // This plugin looks for similar chunks and files
        // and merges them for better caching by the user
        new webpack.optimize.DedupePlugin(),
        // This plugins optimizes chunks and modules by
        // how much they are used in your app
        new webpack.optimize.OccurrenceOrderPlugin(),
        // This plugin minifies all the Javascript code of the final bundle
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: true,
            screw_ie8: true
        })*/
    ]

    
};