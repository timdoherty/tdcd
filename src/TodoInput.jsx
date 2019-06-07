import React, { useState } from 'react';

function TodoInput(props) {
  const [value, setValue] = useState('');
  return (
    <input
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

export default TodoInput;
