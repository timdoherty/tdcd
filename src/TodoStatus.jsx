import React from 'react';
import PropTypes from 'prop-types';

function TodoStatus(props) {
  return (
    <input
      type="checkbox"
      checked={Boolean(props.isComplete)}
      onChange={props.onChange}
    />
  );
}

TodoStatus.propTypes = {
  isComplete: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default TodoStatus;
