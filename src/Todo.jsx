import React from 'react';
import PropTypes from 'prop-types';
import TodoStatus from './TodoStatus';

const Delete = props => <button onClick={props.onClick}>Delete</button>;

function Todo(props) {
  return (
    <div>
      <TodoStatus
        isComplete={props.isComplete}
        onChange={() => {
          props.onChange(props.todo);
        }}
      />
      {props.todo}
      <Delete onClick={() => props.onRemove(props.todo)} />
    </div>
  );
}

Todo.propTypes = {
  isComplete: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Todo;
