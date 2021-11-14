const {
  merge
} = require("webpack-merge");
const common = require("./webpack.config.js");


module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [{
      test: /\.html$/i,
      loader: "html-loader",
      options: {
        esModule: false, //在开发环境中启用false
      },
    }],
  },

});