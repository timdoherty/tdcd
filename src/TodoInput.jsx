import React from 'react';

function TodoInput(props) {
  return (
    <input
      onKeyUp={e => {
        if (e.key === 'Enter' && e.target.value) {
          props.onKeyUp(e.target.value);
        }
      }}
    />
  );
}

export default TodoInput;
