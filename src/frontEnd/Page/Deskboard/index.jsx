import React from 'react';
import { connect } from 'react-redux';
import { getApi } from '../../hooks/requestApi';
import { getProduts } from '../../redux/actions';
import CardProducts from '../../components/cardProducts';

const Deskboard = ({ getProduts, products, user, history }) => {

  if (user) {
    getProduts(getApi('products', user.token));
  } else {
    history.push('/');
  }

  return (
    <section className='Deskboard'>
      <h2 className='Deskboard-title primary-dark'>
        Admin Products
      </h2>
      <button type='button' className='Deskboard-btn content__button'>
        <i className='material-icons'>
          add
        </i>
        Agregar
      </button>
      <div className='Deskboard-items'>
        {
          products.map((product) => <CardProducts key={product.id} product={product} Update={true} />)
        }
      </div>
    </section>
  );
};

const mapStatecToProps = (state) => {
  return {
    products: state.products,
    user: state.user,
  };
};

const mapDispatchToProps = {
  getProduts,
};

export default connect(mapStatecToProps, mapDispatchToProps)(Deskboard);
