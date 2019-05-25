import React from 'react';

function TodoStatus(props) {
  return (
    <input
      type="checkbox"
      checked={Boolean(props.isComplete)}
      onChange={() => {
        props.toggle(props.todo);
      }}
    />
  );
}

export default TodoStatus;
