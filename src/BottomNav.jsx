import React from 'react';

function BottomNav(props) {
  function onChange(e) {
    props.onChange(e.target.value);
  }
  return (
    <div>
      {props.options.map(option => (
        <React.Fragment key={option.value}>
          <input
            id={option.value}
            type="radio"
            name="nav"
            value={option.value}
            onChange={onChange}
            checked={option.value === props.selected}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </React.Fragment>
      ))}
    </div>
  );
}

export default BottomNav;
