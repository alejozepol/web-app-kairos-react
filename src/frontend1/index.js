import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import reducer from './redux/reducers';
import App from './routes';

const ENV = process.env.NODE_ENV;

if (typeof window !== 'undefined') {
  let composeEnhacers;
  if (ENV === 'development') {
    composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  } else {
    composeEnhacers = compose;
  }
  const preloadState = window.__PRELOADED_STATE__;
  const store = createStore(reducer, preloadState, composeEnhacers(applyMiddleware(thunk)));
  const history = createBrowserHistory();

  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app'),
  );

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceWorker.js').catch((error) => {
      console.log(error.message);
    });
  }
}
