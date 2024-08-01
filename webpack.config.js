const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV && (process.env.NODE_ENV.trim() === 'production');

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: "source-map",
  devServer: {
    port: 9000,
    hot: true,
    watchFiles: ['src/**/*'],
  },
  target: 'web',
  entry: {
    main: "./src/App.js",
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'docs'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/images", to: "images" },
      ]
    }),
  ],
  resolve: {
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        }, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpe?g|gif|eot|ttf|woff)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              "@babel/preset-react",
            ]
          }
        }
      }
    ],
  },
};