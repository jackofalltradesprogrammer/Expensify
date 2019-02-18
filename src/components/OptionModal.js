import React from 'react';
import Modal from 'react-modal';
// ! Modal component instead of alert browser function
// ! Modal can support few crops like OnRequestClose calls a function when user Esc or click on the background
const OptionModal = props => (
  <div>
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleClearSelectedOption}
      contentLabel="Selected Option"
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button
        onClick={() => {
          props.handleClearSelectedOption();
        }}
      >
        Okay
      </button>
    </Modal>
  </div>
);

export default OptionModal;

// todo: Create a new even handle in IndecisionApp that clears selectedOption state
// todo: Pass that into OptionModal
// todo: Call in on button click
