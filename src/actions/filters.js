
// Filters that need to be passed to the Filter Reducer to put them in the store
// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});
// SET_START_DATE
export const setStartDate = (startDate = null) => ({
  type: 'SET_START_DATE',
  startDate
});
// SET_END_STATE
export const setEndDate = (endDate = null) => ({
  type: 'SET_END_DATE',
  endDate
});