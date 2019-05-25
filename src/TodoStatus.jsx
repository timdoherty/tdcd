import React from 'react';

function TodoStatus(props) {
  return (
    <input
      type="checkbox"
      checked={Boolean(props.isComplete)}
      onChange={props.toggle}
    />
  );
}

export default TodoStatus;
