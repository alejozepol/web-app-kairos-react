import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import headerCard from '../../assets/card-head.png';
import { addCart } from '../../redux/actions';

const _product = [
  {
    id: 1,
    title: 'title',
    description: 'description',
    measure:
    {
      measure: 'ML',
    },
  },
];

const CardProducts = ({ product = _product, addCart, Update }) => {
  const trimText = (text, limit) => {
    if (text.length >= limit || text) {
      return `${text.slice(0, limit)}...`;
    }
    return text;
  };

  return (
    <section className='CardProducts'>
      <img className='CardProducts__head' src={headerCard} alt='backgound card' />
      <div className='content content__info'>
        <h3 className='content__title'>
          {
            product.title && (
              trimText(product.title, 30)
            )
          }
        </h3>
        <div className='content__img'>
          <img src={product.urlImage} alt={product.title} />
        </div>
        {
          Update ? (
            <Link to={`/deskboard/product/${product.id}`} type='button' className='content__button'>
              <button type='button' className='content__button'>
                <i className='material-icons'>
                  edit
                </i>
                Update
              </button>
            </Link>
          ) : (
            <button onClick={() => addCart(product)} type='button' className='content__button content__button-add'>Agregar</button>
          )
        }
        <p className='content__weight'>
          <b>
            {
              product.measure && (
                `${product.quantity} ${product.measure.measure || 'N/A'}`
              )
            }
          </b>
        </p>
        <p className='content__description'>
          {
            product.description && (
              trimText(product.description, 60)
            )
          }
        </p>
      </div>
      <div className='foo'>
        <div className='foo__circle foo__circle-lg foo__circle-contrast' />
        <div className='foo__circle foo__circle-md foo__circle-primary' />
        <div className='foo__circle foo__circle-sm foo__circle-primaryGradiente' />
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  addCart,
};

export default connect(null, mapDispatchToProps)(CardProducts);

