import { createStore } from 'redux';

// create store in Redux and it takes a previous state object
// whenever something is dispatched createStore runs again
// as we add more dispatch calls count keeps performing the action given
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: state.count = 0
      };
    default:
      return state;
  }
});

console.log(store.getState());

// TODO:  Actions - than an object that gets sent to the store

// TODO: increment, decrement, reset
// whenever something is dispatched createStore runs again
// as we add more dispatch calls count keeps performing the action given
store.dispatch({
  type: 'INCREMENT'
});


// TODO: i'd like to reset the count to zero

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});

console.log(store.getState());
