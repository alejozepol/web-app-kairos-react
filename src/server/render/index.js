import dovenv from 'dotenv';

dovenv.config();

const isProd = (process.env.NODE_ENV === 'production');

const render = (html, preloadedState) => {
  let css = '/assets/app.css';
  let js = '/assets/app.js';
  let vendor = '/assets/vendor.js';

  if (isProd) {
    css = file['main.css'];
    js = file['main.js'];
    vendor = file['vendors.js'];
  };

  return (`<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="description" content="Kairos | La mejor manera de comprar">
      <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="HandheldFriendly" content="True">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta property="og:site_name" content="Kairos | La mejor manera de comprar">
      <meta property="og:type" content="website">
      <meta property="og:title" content="Kairos">
      <meta property="og:description" content="¡La mejor manera de comprar!">
      <meta property="og:url" content="https://kairosshop.xyz/">
      <meta property="og:image" content="https://kairosshop.xyz/assets/images/brand/LogoBlue.svg">
      <title>Kairos</title>
      <link rel="manifest" href="/manifest.json"></link>
      <link rel="shortcut icon" href="IsotipoCuadraNegro.ico"></link>
      <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
      rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Roboto:700&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="${css}" type="text/css"></link>
  </head>
  <body>
      <div id="app">${html}</div>
      <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
      /</g,
      '\\u003c',
    )}
        </script>
      <script src="${js}" type="text/javascript"></script>
      <script src="${vendor}" type="text/javascript"></script>
  </body>
  </html>
  `);
};

export default render;
