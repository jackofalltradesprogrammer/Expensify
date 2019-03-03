import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

// TODO should render ExpensForm with expense data
test('should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render an error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  // .find helps to find an element ( arguments can be classnames, ids etc)
  // ! As we are simulating, we are not passing any date with it
  // ! And in our onSubmit() we are calling prevent default function on 'e' which generates an error as it is undefined
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  // wrapper.state, is used to access the state of the component
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<ExpenseForm />);
  // if multiple elemeents are there, 'at' is used to find the position by providing the index
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('description')).toBe(value);
});

// TODO should set note on textarea change
test('should set note on textarea change', () => {
  const value = 'New note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
});

// TODO should set amount if valid input
test('should set amount if valid input', () => {
  const value = '23.50';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('amount')).toBe(value);
});

// TODO should not set amount if invalid input
test('should not set amount if invalid input', () => {
  const value = '12.122';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value }
    });
  expect(wrapper.state('amount')).toBe('');
});

// Goal of spies - to create fake functions and we can make assertions by them
// For a mock function: we can check if it is called, called with arguments etc.
//  test('should call onSubmit prop for valid form submission', () => {
//   const onSubmitSpy = jest.fn();
//   onSubmitSpy('Andrew', 'Philadelphia');
//   expect(onSubmitSpy).toHaveBeenCalledWith('Andrew', 'Philadelphia');
// });


// As the form submission needs a method onSubmit, we will be passing a mock function (spy)
test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

// prop() Enzyme lets us access one prop on the component 
// example below let us access that function or handler
test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

// TODO should set calendar focus on change
test('should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toBe(focused);
});