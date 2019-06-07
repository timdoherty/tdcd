import React from 'react';
import Card from '@material-ui/core/Card';
import TodoStatus from './TodoStatus';

const Delete = props => <button onClick={props.onClick}>Delete</button>;

function Todo(props) {
  return (
    <Card
      style={{ width: '95%', margin: '2px auto 0 auto', textAlign: 'left' }}
    >
      <TodoStatus
        isComplete={props.isComplete}
        onChange={() => {
          props.toggle(props.todo);
        }}
      />
      {props.todo}
      <Delete onClick={() => props.onRemove(props.todo)} />
    </Card>
  );
}

export default Todo;
