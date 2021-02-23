/* eslint-disable global-require */
import webpack from 'webpack';
import express from 'express';
import dovenv from 'dotenv';
import helmet from 'helmet';
import main from './routes/main';

dovenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(`${__dirname}/public`));

if (ENV === 'production') {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../../webpack.config');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: '/',
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
  console.log('Ejecucion en entorno de produccion');
} else {
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
  console.log('Ejecucion en entorno de desarrollo');
}

app.get('*', main);
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  };
  console.log(`El servidor se inicio exitosamente http://localhost:${PORT}`);
});

