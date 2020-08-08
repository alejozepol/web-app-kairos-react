import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../container/Home';
import Deskboard from '../container/Deskboard';
import '../styles/app.scss';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/desk' component={Deskboard} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
