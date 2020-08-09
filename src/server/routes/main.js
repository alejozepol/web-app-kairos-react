/* eslint-disable import/no-unresolved */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import fetch from 'node-fetch';
import Routes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/container/Layout';
import reducer from '../../frontend/redux/reducers';
import render from '../render';
import initialState from '../../frontend/redux/initialState';

const API = 'https://api.kairosshop.xyz/api';

function getCategories() {
  return fetch(`${API}/categories`)
    .then((response) => response.json())
    .then(({ body, error }) => {
      if (error) {
        return console.error(res.error);
      }
      return body;
    })
    .then((data) => {
      initialState.categories = data;
    })
    .catch((error) => console.error(error));

}

function getProductsOfCategory(categoryId, title) {
  return fetch(`${API}/products/?categoryId=${categoryId}`)
    .then((response) => response.json())
    .then(({ body, error }) => {
      if (error) {
        return console.error(res.error);
      }
      return body;
    })
    .then((data) => {
      const object = {
        categoryId,
        title,
        products: [...data],
      };
      initialState.productsOfCategories = [...initialState.productsOfCategories, object];
    })
    .catch((error) => console.error(error));
}

const main = async (req, res, next) => {
  getCategories()
    .then(() => { initialState.productsOfCategories = []; })
    .then(() => getProductsOfCategory(initialState.categories[0].id, initialState.categories[0].title))
    .then(() => getProductsOfCategory(initialState.categories[1].id, initialState.categories[1].title))
    .then(() => getProductsOfCategory(initialState.categories[2].id, initialState.categories[2].title))
    .then(() => getProductsOfCategory(initialState.categories[3].id, initialState.categories[3].title)
      .then(() => {
        try {
          const store = createStore(reducer, initialState);
          const html = renderToString(
            <Provider store={store}>
              <StaticRouter
                location={req.url}
                context={{}}
              >
                <Layout location={req.url}>
                  {renderRoutes(Routes)}
                </Layout>
              </StaticRouter>
            </Provider>,
          );
          const preloadedState = store.getState();
          res.send(render(html, preloadedState));
        } catch (error) {
          next(error);
        }
      }));
};

export default main;
