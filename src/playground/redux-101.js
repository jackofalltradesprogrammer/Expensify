import { createStore } from 'redux';

// create store in Redux and it takes a previous state object
// whenever something is dispatched createStore runs again
// as we add more dispatch calls count keeps performing the action given
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy =
        typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy =
        typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: (state.count = 0)
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
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

// call the unsubscribe function
// unsubscribe();

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'SET',
  count: 10
});
