import {createStore} from 'redux';

// create store in Redux and it takes a previous state object
const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());