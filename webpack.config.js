// const webpackNodeExternals = require("webpack-node-externals");
// const path = require("path");

// module.exports = {
//   entry: {
//     server: "./index.js",
//   },
//   output: {
//     path: path.join(__dirname, "dist"),
//     filename: "bundle.js",
//   },
//   target: "node",
//   externals: [webpackNodeExternals()], // Exclude node_modules when bundling
//   module: {
//     rules: [
//       {
//         // translate from es6 to es5
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//     ],
//   },
// };
