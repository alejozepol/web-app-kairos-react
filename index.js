import React from 'react';
import ReactDom from 'react-dom';
import { FirebaseContext, Firebase } from './firebase';
import App from './routes';

ReactDom.render(
  <FirebaseContext.Provider value={Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('app'),
);
