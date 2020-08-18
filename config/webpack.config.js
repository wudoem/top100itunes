const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const TsConfigPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const config = {
  entry: {
    main: ["regenerator-runtime/runtime", "react-hot-loader/patch", "./index"],
  },
  context: path.join(process.cwd(), "src"),
  stats: "minimal",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(j|t)s(x)?$/,
        exclude: [/node_modules/, /^(?:[^_]*_)/],
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.s(c)ss?$/,
        exclude: [/node_modules/, /^(?:[^_]*_)/],
        use: [
          "style-loader",
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: path.resolve(process.cwd(), "config/postcss.config.js"),
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    plugins: [
      new TsConfigPathsWebpackPlugin({
        configFile: path.join(process.cwd(), "./tsconfig.json"),
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), "src/index.html"),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: true,
      typescript: {
        configFile: path.join(process.cwd(), "./tsconfig.json"),
      },
    }),
    new FriendlyErrorsWebpackPlugin({ clearConsole: true }),
  ],
};

module.exports = exports = config;
