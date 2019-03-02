import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// .toEqual should be used for objects and arrays
test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

// TODO Setup test case
// TODO Call editExpense { note: 'New note value'}
// TODO Make an assertion

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'Happy is cool' });
  expect(action).toEqual({
    id: '123abc',
    type: 'EDIT_EXPENSE',
    updates: { note: 'Happy is cool' }
  });
});

// uuid() is unique everytime, so we need to find a trick to avoid mismatch of the value
// we use expect.any(String) to tell Jest that we are expecting a string and no need to check the value
test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  // TODO  Call addExpense with no data
  // TODO  Assert the value of the return object
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    }
  });
});
