import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';

function TodoStatus(props) {
  return (
    <input
      type="checkbox"
      checked={Boolean(props.isComplete)}
      onChange={props.onChange}
    />
  );
}
const Delete = props => <button onClick={props.onClick}>Delete</button>;

function Todo(props) {
  return (
    <Card
      style={{ width: '95%', margin: '2px auto 0 auto', textAlign: 'left' }}
    >
      <TodoStatus
        isComplete={props.isComplete}
        onChange={() => {
          props.onChange(props.todo);
        }}
      />
      {props.todo}
      <Delete onClick={() => props.onRemove(props.todo)} />
    </Card>
  );
}

Todo.propTypes = {
  isComplete: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Todo;
