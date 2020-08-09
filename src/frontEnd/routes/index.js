import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../page/Home';
import Deskboard from '../container/Deskboard';
import ProductsofCategory from '../Page/ProductsofCategory';
import '../styles/app.scss';
import ProductsofSubcategory from '../Page/ProductsofSubcategory';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/deskboard' component={Deskboard} />
          <Route exact path='/category/:id' component={ProductsofCategory} />
          <Route exact path='/subcategory/:id/:title' component={ProductsofSubcategory} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
