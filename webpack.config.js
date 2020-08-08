const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtraxtPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV;
const nodeEnv = mode === 'development';
module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    // eslint-disable-next-line no-param-reassign
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
/*     devtool: 'eval-cheap-source-map', */
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          },
        },
        {
          test: /\.(s*)css$/,
          exclude: /node_modules/,
          use: [{
            loader: MiniCssExtraxtPlugin.loader,
          },
          'css-loader',
          'sass-loader',
          ],
        },
        {
          test: /\.(png|gif|jpg|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: nodeEnv ? 'assets/[name].[ext]' : 'assets/[hash].[ext]',
              },
            },
          ],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    node: {
      fs: 'empty',
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
      new MiniCssExtraxtPlugin({
        filename: nodeEnv ? 'assets/[name].css' : 'assets/[name].css',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
  };
};
