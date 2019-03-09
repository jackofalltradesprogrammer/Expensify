import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('Viewing 2 expenses totalling $94.34', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={94.34} />);
  expect(wrapper).toMatchSnapshot();
});

test('Viewing 1 expenses totalling $94.34', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={94.34} />);
  expect(wrapper).toMatchSnapshot();
});