/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import GardenCardProducts from '../../container/gardenCardProducts';
import { getProductsCategory } from '../../redux/actions';
import { getApi } from '../../hooks/requestApi';

const productsOfCategory = ({ productsOfCategory, match, getProductsCategory }) => {
  const { id } = match.params;

  const products = getApi(`products/?categoryId=${id}&limit=100`);
  useEffect(() => {
    getProductsCategory(products);
  }, [products]);

  const { title, subcategories = [] } = productsOfCategory;

  return (
    <section className='productsOfCategory'>
      <h2>{title}</h2>
      {
        subcategories
          .map((item) => {
            if (item.products.length) {
              return (
                <GardenCardProducts
                  key={item.id}
                  categoryId={item.id}
                  title={item.title}
                  products={item.products}
                />
              );
            }
          })
      }
    </section>
  );
};

const mapStatecToProps = (state) => {
  return {
    productsOfCategory: state.productsOfCategory,
  };
};

const mapDispatchToProps = {
  getProductsCategory,
};

export default connect(mapStatecToProps, mapDispatchToProps)(productsOfCategory);
