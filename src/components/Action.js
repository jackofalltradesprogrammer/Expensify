import React from 'react';

// ! In stateless functions props needs to be passed as arguments
 const Action = (props) => {
    return (
      <div>
        <button 
          onClick={props.handlePick} 
          disabled={!props.hasOptions}
        >
          What Should I do?
        </button>
      </div>
    );
  };

  export default Action;