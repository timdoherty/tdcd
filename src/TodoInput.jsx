import React, { useRef } from 'react';

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

export default TodoInput;
