import React from 'react';
import headerCard from '../../assets/card-head.png';

const CardProducts = ({ product }) => {
  const trimText = (text, limit) => {
    if (text.length >= limit) {
      return `${text.slice(0, limit)}...`;
    }
    return text;
  };

  return (
    <section className='CardProducts'>
      <img className='CardProducts__head' src={headerCard} alt='backgound card' />
      <div className='content content__info'>
        <h3 className='content__title'>
          {trimText(product.title, 30)}
        </h3>
        <div className='content__img'>
          <img src={product.urlImage} alt={product.title} />
        </div>
        <button type='button' className='content__button'>Agregar</button>
        <p className='content__weight'>
          <b>
            {`${product.quantity} ${product.measure.measure || 'N/A'}`}
          </b>
        </p>
        <p className='content__description'>
          {trimText(product.description, 60)}
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

export default CardProducts;
