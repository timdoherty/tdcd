import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';

function BottomNav(props) {
  function onChange(e) {
    props.onChange(e.target.value);
  }
  return (
    <div>
      {props.options.map(option => (
        <Fragment key={option.value}>
          <Radio
            id={option.value}
            name="nav"
            value={option.value}
            onChange={onChange}
            checked={option.value === props.selected}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </Fragment>
      ))}
    </div>
  );
}

BottomNav.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BottomNav;
