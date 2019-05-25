import React from 'react';
import TodoStatus from './TodoStatus';

function Todo(props) {
  return (
    <div>
      <TodoStatus
        isComplete={props.isComplete}
        toggle={() => {
          props.toggle(props.todo);
        }}
      />
      {props.todo}
    </div>
  );
}

export default Todo;
