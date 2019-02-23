import { createStore } from 'redux';

// Action generators  - functions that return action objects
// It helps to avoid type errors as well
// We can also destructure arguments passed in the functions

const add = ({ a, b }, c) => {
  return a + b + c;
};
console.log(add({ a: 1, b: 12 }, 100));

// we will do destrucuring on the arguments payload()
// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });
// we use destructuring and also set the value of argument as default to be empty
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  // Use es6 to set the value if names are same
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

// setCount
const setCount = ({ count }) => ({ type: 'SET', count });

// reset Count
const resetCount = () => ({ type: 'RESET' });

// create store in Redux and it takes a previous state object
// whenever something is dispatched createStore runs again
// as we add more dispatch calls count keeps performing the action given
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

// to keep a watch on the store - the Redux store gives us subscription features
// The unsubscription feature is also available 'subscribe()' functions returns a functions
// and we can call it to cancel the subscription
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// we can pass dynamic information with the dispatch calls
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// call the unsubscribe function
// unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
