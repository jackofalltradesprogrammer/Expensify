import React from 'react';

// ! In stateless functions props needs to be passed as arguments
const Action = props => (
  <div>
    <button className="big-button" onClick={props.handlePick} disabled={!props.hasOptions}>
      What Should I do?
    </button>
  </div>
);

export default Action;
