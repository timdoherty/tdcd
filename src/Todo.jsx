import React from 'react';
import TodoStatus from './TodoStatus';

const Delete = props => <button onClick={props.onClick}>Delete</button>;

function Todo(props) {
  return (
    <div>
      <TodoStatus
        isComplete={props.isComplete}
        onChange={() => {
          props.toggle(props.todo);
        }}
      />
      {props.todo}
      <Delete onClick={() => props.onRemove(props.todo)} />
    </div>
  );
}

export default Todo;
