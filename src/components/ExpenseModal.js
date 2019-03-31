import React from 'react';
import Modal from 'react-modal';

const ExpenseModal = (props) => (
  <Modal
    isOpen={!!props.selectedExpense}
    onRequestClose={props.onRemove}
    contentLabel="Selected Expense to Remove"
  >
    <h3>Selected Expesnse</h3>
    {props.selectedExpense && <p> {props.selectedExpense}</p>}
    <button onClick={props.onRemove}>No</button>
    <button onClick={props.onRemoveConfirm}>Yes</button>
  </Modal>
);

export default ExpenseModal;