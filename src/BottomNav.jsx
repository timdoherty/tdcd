import React from 'react';
import PropTypes from 'prop-types';

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
        />
      ))}
    </div>
  );
}

BottomNav.propTypes = {};

BottomNav.defaultProps = {};

export default BottomNav;
