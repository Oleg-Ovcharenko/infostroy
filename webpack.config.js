var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./app/main.js",
    output: {
        path: __dirname + '/dist/js/',
        publicPath: "js/",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=react,plugins[]=transform-runtime'],
                exclude: [/node_modules/, /dist/]
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /dist/]
            }, {
                test: /\.scss$/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader",
                exclude: [/node_modules/, /dist/]
            }, {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader',
                exclude: [/node_modules/, /dist/]

            }, {
                test: /\.jsx$/,
                loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=react,plugins[]=transform-runtime'],
                exclude: [/node_modules/, /dist/]
            }, {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: true
            }
        })
    ]
}