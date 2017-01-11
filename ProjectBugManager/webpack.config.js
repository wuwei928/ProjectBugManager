 module.exports=require('./config/webpack.dev')

// var path = require('path')
// var webpack = require('webpack')

// module.exports = {
//   entry: "./app/main.ts",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     publicPath: '/dist/',
//     filename: "bundle.js"
//   },

//   devtool: "source-map",

//   resolve: {
//     extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
//   },

//   plugins: [
//     new webpack.HotModuleReplacementPlugin()
//   ],

//   module: {
//     preLoaders: [
//       { test: /\.ts$/, loader: "ts-loader" },
//       { test: /\.js$/, loader: "source-map-loader" }
//     ]
//   }
// };