import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

// A mock redux store to be used for testing
const createMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database adn store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };
  // this function is asynchronous as it takes time to run and we need to make jest wait
  // jest won't finish the function untile done() is called 
  // which will be called after the promise is returned
  store.dispatch(startAddExpense(expenseData)).then(() => {
    expect(1).toBe(1);
    done();
  });
});

test('should add expense with defaults to databse and store', () => {

});

// test('should setup add expense action object with default values', () => {
//   // TODO  Call addExpense with no data
//   // TODO  Assert the value of the return object
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       amount: 0,
//       createdAt: 0,
//       note: ''
//     }
//   });
// });
