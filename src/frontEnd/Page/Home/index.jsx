import React from 'react';
import { connect } from 'react-redux';
import GardenCardProducts from '../../container/gardenCardProducts';

const Home = ({ productsOfCategories }) => {
  return (
    <section className='Home'>
      {
        productsOfCategories
          .map((item) => (
            <GardenCardProducts
              more={true}
              key={item.categoryId}
              categoryId={item.categoryId}
              title={item.title}
              products={item.products.slice(0, 3)}
            />
          ))
      }
    </section>
  );
};

const mapStatecToProps = (state) => {
  return {
    productsOfCategories: state.productsOfCategories,
  };
};

const mapDispatchToProps = {

};

export default connect(mapStatecToProps, mapDispatchToProps)(Home);
