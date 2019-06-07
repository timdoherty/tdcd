import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function TodoInput(props) {
  const inputRef = useRef();
  return (
    <input
      ref={inputRef}
      onKeyUp={e => {
        if (e.key === 'Enter' && e.target.value) {
          props.onKeyUp(e.target.value);
          inputRef.current.value = '';
        }
      }}
    />
  );
}

TodoInput.propTypes = {
  onKeyUp: PropTypes.func.isRequired,
};

export default TodoInput;
