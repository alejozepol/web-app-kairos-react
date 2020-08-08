import React from 'react';
import { connect } from 'react-redux';
import GardenCardProducts from '../../container/gardenCardProducts';

const Home = ({ productsOfCategories }) => {
  return (
    <section className='Home'>
      {
        productsOfCategories.map((item) => <GardenCardProducts key={item.categoryId} title={item.title} products={item.products} />)
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
