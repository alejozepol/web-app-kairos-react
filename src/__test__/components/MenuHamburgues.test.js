import React from 'react';
import { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import CategoryMock from '../../__mocks__/categoryMock';
import MenuHamburger from '../../frontend/components/menuHamburger';

describe('<MenuHamburger/>', () => {

  test('Render del componente MenuHamburger', () => {
    const menuHamburger = shallow(
      <ProviderMock>
        <MenuHamburger categories={CategoryMock} />
      </ProviderMock>,
    );
    expect(menuHamburger.length).toEqual(1);
  });

});
