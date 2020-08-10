import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../Page/Home';
import Deskboard from '../Page/Deskboard';
import ProductsofCategory from '../Page/ProductsofCategory';
import ProductsofSubcategory from '../Page/ProductsofSubcategory';
import Login from '../Page/Login';
import Register from '../Page/Register';
import FormProducts from '../Page/formProducts';
import '../styles/app.scss';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/deskboard' component={Deskboard} />
          <Route exact path='/deskboard/:id/:action' component={FormProducts} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/category/:id' component={ProductsofCategory} />
          <Route exact path='/subcategory/:id/:title' component={ProductsofSubcategory} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
