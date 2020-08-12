import React from 'react';
import { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import CategoriesMock from '../../__mocks__/categoriesMock';
import Categories from '../../frontend/components/categories';

describe('<Categories/>', () => {

  test('Render del componente Categories', () => {
    const categories = shallow(
      <ProviderMock>
        <Categories item={CategoriesMock} />
      </ProviderMock>,
    );
    expect(categories.length).toEqual(1);
  });

});
