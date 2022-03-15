const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    story1: "./src/movies/story1.js",
    story2: "./src/friends/story2.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "bundle_babel"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: "./src/movies/story1.html",
      filename: 'story1.html',
      chunks: ['story1']
    }),
    new HtmlWebpackPlugin({
      template: "./src/friends/story2.html",
      filename: 'story2.html',
      chunks: ['story2']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
      {
        test:/\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
    ]
  }
};
