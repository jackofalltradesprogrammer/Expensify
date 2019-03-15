import React from 'react';
import {shallow} from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

test('should render loading page correctly', () => {
  const wrapper = new shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});