import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoStatus(props) {
  return (
    <Checkbox checked={Boolean(props.isComplete)} onChange={props.onChange} />
  );
}
const Delete = props => (
  <IconButton onClick={props.onClick}>
    <DeleteIcon />
  </IconButton>
);

function Todo(props) {
  return (
    <Card
      style={{
        display: 'flex',
        width: '95%',
        margin: '2px auto 0 auto',
        textAlign: 'left',
      }}
    >
      <div style={{ flex: '1' }}>
        <TodoStatus
          isComplete={props.isComplete}
          onChange={() => {
            props.onChange(props.todo);
          }}
        />
        {props.todo}
      </div>
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
