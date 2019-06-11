import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TodoInput(props) {
  const [value, setValue] = useState('');
  return (
    <input
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyUp={e => {
        if (e.key === 'Enter' && value) {
          props.onChange(value);
          setValue('');
        }
      }}
    />
  );
}

TodoInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default TodoInput;
