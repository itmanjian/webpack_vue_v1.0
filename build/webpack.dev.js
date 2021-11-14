const {
  merge
} = require("webpack-merge");
const common = require("./webpack.config.js");
const path = require("path");
module.exports = merge(common, {
  mode: "development",
  devServer: {
    hot: true, //热更新
    host: 'localhost',
    compress: true, //开启gzip压缩
    port: 8080, //开启端口号
    //托管的静态资源文件，可通过数组的方式托管多个静态资源文件
    static: {
      directory: path.join(__dirname, "../public"),
    },
  }
});