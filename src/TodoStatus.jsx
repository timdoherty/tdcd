import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function TodoStatus(props) {
  return (
    <Checkbox checked={Boolean(props.isComplete)} onChange={props.toggle} />
  );
}

export default TodoStatus;
