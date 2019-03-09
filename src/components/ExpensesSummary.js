import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectTotalExpenses from '../selectors/expenses-total';
// destructuring props
export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount ===1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <h1>
        Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesTotal: selectTotalExpenses(visibleExpenses),
    expensesCount: visibleExpenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
