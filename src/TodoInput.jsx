import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

function TodoInput(props) {
  const [value, setValue] = useState('');
  return (
    <TextField
      style={props.style}
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyUp={e => {
        if (e.key === 'Enter' && value) {
          props.onKeyUp(value);
          setValue('');
        }
      }}
    />
  );
}

TodoInput.propTypes = {
  onKeyUp: PropTypes.func.isRequired,
};

export default TodoInput;
