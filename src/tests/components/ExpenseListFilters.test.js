import React from 'React';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setEndDate={setEndDate}
      setStartDate={setStartDate}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />
  );
});

test('should render ExpenseFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

// TODO should handle text change
// TODO should sort by date
// TODO should sort by amount
// TODO should handle date changes
// TODO should handle date focus changes
test('should handle text change', () => {
  const text = 'bill';
  wrapper.find('input').simulate('change', { target: { value: text } });
  expect(setTextFilter).toHaveBeenCalledWith(text);
});

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', { target: { value: 'date' } });
  expect(sortByDate).toHaveBeenCalledWith();
});

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', { target: { value: 'amount' } });
  expect(sortByAmount).toHaveBeenCalledWith();
});

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenCalledWith(startDate);
  expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toEqual(calendarFocused);
});
