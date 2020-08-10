require('ignore-styles');
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

const dovenv = require('dotenv');

dovenv.config();

const isProd = (process.env.NODE_ENV === 'production1');

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif', 'svg'],
  name: isProd ? '/assets/[hash].[ext]' : '/assets/[name].[ext]',
});

require('./server.js');
