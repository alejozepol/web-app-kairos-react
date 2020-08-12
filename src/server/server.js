/* eslint-disable global-require */
import webpack from 'webpack';
import express from 'express';
import dovenv from 'dotenv';
import helmet from 'helmet';
import main from './routes/main';

dovenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(`${__dirname}/public`));

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config');

const compiler = webpack(webpackConfig);
const serverConfig = {
  contentBase: `http://localhost:${PORT}`,
  port: PORT,
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
};
app.use(webpackDevMiddleware(compiler, serverConfig));
app.use(webpackHotMiddleware(compiler));


app.get('*', main);
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  };
  console.log(`El servidor se inicio exitosamente http://localhost:${PORT}`);
});

