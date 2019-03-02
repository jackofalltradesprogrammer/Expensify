import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

// We need test data for our expenses
import expenses from '../fixtures/expenses';

// test 1
test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: null,
    endDate: null
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: null
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);

});

// TODO should filter by endDAte
test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: null,
    endDate: moment(0).add(2, 'days')
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

// TODO SHOULD sort by date
test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: null,
    endDate: null
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
})

// TODO should sort by amount
test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: null,
    endDate: null
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
})