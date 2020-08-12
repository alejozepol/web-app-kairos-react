import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import productMock from '../../__mocks__/productMock';
import CardProducts from '../../frontend/components/cardProducts';

describe('<CardProducts/>', () => {

  test('Render del componente CardProducts', () => {
    const cardProducts = shallow(
      <ProviderMock>
        <CardProducts />
      </ProviderMock>,
    );
    expect(cardProducts.length).toEqual(1);
  });

  test('Comprobar boton de agregar', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <CardProducts
          product={productMock}
          handleAddToCart={handleAddToCart}
        />
      </ProviderMock>,
    );
    wrapper.find('.content__button-add').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(0);
  });
});
