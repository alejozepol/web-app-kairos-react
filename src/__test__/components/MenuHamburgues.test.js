import React from 'react';
import { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import CategoriesMock from '../../__mocks__/categoriesMock';
import MenuHamburger from '../../frontend/components/menuHamburger';

describe('<MenuHamburger/>', () => {

  test('Render del componente MenuHamburger', () => {
    const menuHamburger = shallow(
      <ProviderMock>
        <MenuHamburger categories={CategoriesMock} />
      </ProviderMock>,
    );
    expect(menuHamburger.length).toEqual(1);
  });

});
