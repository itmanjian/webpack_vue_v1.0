const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  VueLoaderPlugin
} = require('vue-loader');


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]@[chunkhash:8].js',
    clean: true
  },
  module: {
    rules: [{
        // *.vue
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        // `*.vue` 文件中的 `<style>` 块以及普通的`*.css`
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        // 图片
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 250000,
            outputPath: ('\\images'), //指定放置目标文件的文件系统路径

          },
        },

      },
      {
        // js
        test: /\.js$/,
        exclude: /node_modules/, // 不编译node_modules
        loader: 'babel-loader'
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../public/index.html'),
      favicon: path.join(__dirname, '../public/favicon.ico')
    }),
    new VueLoaderPlugin(),
  ],
  // 配置webpack限制图片大小
  performance: {
    hints: "warning", // 枚举
    maxAssetSize: 30000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
    assetFilter: function (assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');

    }
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".vue"], //省略文件后缀
    alias: { //配置别名
      "@": path.resolve(__dirname, "../src"),
    },
  },
}