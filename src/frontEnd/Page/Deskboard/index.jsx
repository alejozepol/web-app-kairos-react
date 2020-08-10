import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
      <Link to='deskboard/new/edit' type='button' className='Deskboard-btn content__button'>
        <i className='material-icons'>
          add
        </i>
        Agregar
      </Link>
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
