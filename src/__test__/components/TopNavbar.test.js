import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import TopNavbar from '../../frontend/components/top-navbar';

describe('<TopNavbar/>', () => {

  test('Render del componente TopNavbar', () => {
    const topNavbar = shallow(
      <ProviderMock>
        <TopNavbar />
      </ProviderMock>,
    );
    expect(topNavbar.length).toEqual(1);
  });

  test('Render brand name SEO', () => {
    const topNavbar = mount(
      <ProviderMock>
        <TopNavbar />
      </ProviderMock>,
    );
    expect(topNavbar.find('.topNavbar__brand-name').text()).toEqual('Kairos');
  });
});

