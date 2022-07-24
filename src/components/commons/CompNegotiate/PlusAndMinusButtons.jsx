import PropTypes from 'prop-types';
import React from 'react';

export default function PlusAndMinusButtons({
  value, disabled, calculateButton, type, name,
}) {
  return (
    <div>
      <button
        type="button"
        value={value}
        disabled={disabled}
        onClick={(e) => {
          calculateButton(e.target.value, type);
        }}
      >
        {name}

      </button>
    </div>
  );
}

PlusAndMinusButtons.propTypes = {
  calculateButton: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
