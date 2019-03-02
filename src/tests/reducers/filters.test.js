import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// undefined is passes so state can be assigned a deault value
// @@INIT is used here to demonstrate that Redux does this during the creating of the store
test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: null,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = {type: 'SORT_BY_DATE'};
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set the text filter', () => {
  const text = 'This is my filter';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

// should set startDate filter
test('should set the startDate filter', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});
// should set endDate filter
test('should set the endDate filter', () => {
  const endDate = moment(123322);
  const action = {
    type: 'SET_END_DATE',
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});