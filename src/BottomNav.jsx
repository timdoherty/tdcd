import React from 'react';

function BottomNav(props) {
  function onChange(e) {
    props.onChange(e.target.value);
  }
  return (
    <div>
      {props.options.map(option => (
        <input
          key={option.value}
          type="radio"
          name="nav"
          value={option.value}
          onChange={onChange}
          checked={Boolean(props.selected)}
        />
      ))}
    </div>
  );
}

export default BottomNav;
