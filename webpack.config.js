const path = require('path');
const MiniCssExtraxtPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const dotenv = require('dotenv');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

dotenv.config();
const isProd = (process.env.NODE_ENV === 'production1');

module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'cheap-source-map',
  entry: './src/frontend/index.js',
  mode: process.env.NODE_ENV,
  output: {
    path: isProd ? path.join(process.cwd(), './src/server/public') : '/',
    filename: isProd ? 'assets/app-[hash].js' : 'assets/app.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimizer: isProd ? [new TerserPlugin()] : [],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isProd ? 'assets/vendor-[hash].js' : 'assets/vendor.js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some((chunks) => chunks.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name));
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [{
          loader: MiniCssExtraxtPlugin.loader,
        },
        'css-loader',
        'postcss-loader',
        {
          loader: 'sass-loader',
        },
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: isProd ? 'assets/[hash].[ext]' : 'assets/[name].[ext]',
          },
        }],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ],
      },
    }),
    new MiniCssExtraxtPlugin({
      filename: isProd ? 'assets/app-[hash].css' : 'assets/app.css',
    }),
    isProd ? new CompressionPlugin({
      test: /\.js$|\.css$/,
      filename: '[path].gz',
    }) : () => { },
    isProd ? new ManifestPlugin({
      fileName: 'manifest-hash.json',
    }) : () => { },
  ],
};
