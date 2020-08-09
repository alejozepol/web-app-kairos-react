import React from 'react';
import { connect } from 'react-redux';
import GardenCardProducts from '../../container/gardenCardProducts';
import { getProductsCategory } from '../../redux/actions';

const productsOfCategory = ({ productsOfCategory, match, getProductsCategory }) => {
  const { id } = match.params;

  getProductsCategory(id);

  const { title, subcategories } = productsOfCategory;

  return (
    <section className='productsOfCategory'>
      <h2>{title}</h2>
      {
        subcategories
          .map((item) => {
            if (item.products.length) {
              return (
                <GardenCardProducts
                  key={item.categoryId}
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
