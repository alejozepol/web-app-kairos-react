import React from 'react';
import headerCard from '../../assets/card-head.png';

const CardProducts = ({ product }) => {
  return (
    <section className='CardProducts'>
      <img className='CardProducts__head' src={headerCard} alt='backgound card' />
      <div className='content content__{{type}} content__{{direction}}'>
        <h3 className='content__title'>
          {product.title}
        </h3>
        <div className='content__img'>
          <img src={product.urlImage} alt={product.title} />
        </div>
        <button type='button'>Agregar</button>
        <p className='content__weight'>
          <b>
            {`${product.quantity} ${product.measure.measure}`}
          </b>
        </p>
        <p className='content__description'>
          {product.description}
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
