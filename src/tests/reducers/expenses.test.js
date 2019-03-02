import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// TODO should add an expense
test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Cable',
    note: '',
    amount: 100,
    createdAt: 2000
  };
  const action = { type: 'ADD_EXPENSE', expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// TODO should edit an expense
test('should edit an expense', () => {
  const amount = 122000;
  const updates = {
    amount
  };
  const action = { type: 'EDIT_EXPENSE', updates, id: expenses[0].id };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

// TODO should not edit expense if expense not found

test('should not edit expense if an expense not found', () => {
  const amount = 122000;
  const updates = {
    amount
  };
  const action = { type: 'EDIT_EXPENSE', updates, id: '-1'};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
