const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      remotes: {
        app2: "app2@[app2Url]/remoteEntry.js",
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html", 
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css", 
    }),
  ],
};
