import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  setEditExpense,
  startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
// A mock redux store to be used for testing
const createMockStore = configureMockStore([thunk]);
const uid = 'thisismytestuid';
// we need this as firebase is setting the uid in the REDUX store for authentication
const defaultAuthState = { auth: {uid}};

// data to perform testing on
beforeEach(done => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => {
      done();
    });
});

// .toEqual should be used for objects and arrays
test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should remove the expenses from firebase', done => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database
    .ref(`users/${uid}/expenses/${id}`)
    .once('value');
  }).then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
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

test('should edit expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const updates = { note: 'Happy is cool' };
  const id = expenses[0].id;
  store.dispatch(startEditExpense(id, updates))
  .then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().note).toBe(updates.note);
    done();
  }); // attach .then here
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

test('should add expense to database adn store', done => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };
  // this function is asynchronous as it takes time to run and we need to make jest wait
  // jest won't finish the function untile done() is called
  // which will be called after the promise is returned
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      // get teh action that will be dispatched to the mock store and then do the assertions on them
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      // a promise is getting returned
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }) // we just implemented promise chaining by returning a promise, from inside a promise and using .then()
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with defaults to databse and store', done => {
  const store = createMockStore(defaultAuthState);
  const defaultExpense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  store
    .dispatch(startAddExpense())
    .then(dispatch => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...defaultExpense
        }
      });
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(defaultExpense);
      done();
    });
});

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch the expenses from firebase', done => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});

