import React from 'react';
import { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import CategoryMock from '../../__mocks__/categoryMock';
import Categories from '../../frontend/components/categories';

describe('<Categories/>', () => {

  test('Render del componente Categories', () => {
    const categories = shallow(
      <ProviderMock>
        <Categories item={CategoryMock} />
      </ProviderMock>,
    );
    expect(categories.length).toEqual(1);
  });

});
