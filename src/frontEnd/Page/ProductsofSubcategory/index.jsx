/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import GardenCardProducts from '../../container/gardenCardProducts';
import { getProductsSubcategory } from '../../redux/actions';
import getApi from '../../hooks/getApi';

const productsOfCategory = ({ productsOfSubcategory, match, getProductsSubcategory }) => {
  const { id, title } = match.params;

  const products = getApi(`products/?subcategoryId=${id}`);
  useEffect(() => {
    getProductsSubcategory(products);
  }, [products]);

  return (
    <section className='productsOfCategory'>
      <GardenCardProducts
        key={id}
        categoryId={id}
        title={title}
        products={productsOfSubcategory}
      />

    </section>
  );
};

const mapStatecToProps = (state) => {
  return {
    productsOfSubcategory: state.productsOfSubcategory,
  };
};

const mapDispatchToProps = {
  getProductsSubcategory,
};

export default connect(mapStatecToProps, mapDispatchToProps)(productsOfCategory);
