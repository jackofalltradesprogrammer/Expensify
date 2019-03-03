// for testing, we needed addExpense() to be passed in dispatch(our spy), so we ended up updating AddExpensePage.js
// and use MapDispatchToProps
// Also to avoid inline function, we need to make it a class component

import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn(); // spy
  history = { push: jest.fn() }; // spy
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test('should render AddExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenCalledWith(expenses[1]);
});
