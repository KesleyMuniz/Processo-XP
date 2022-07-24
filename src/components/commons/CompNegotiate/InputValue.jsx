import PropTypes from 'prop-types';
import React from 'react';

export default function InputValue({
  buyVolumes, setBuy,
}) {
  return (
    <div>
      <input
        type="number"
        id="buyInput"
        placeholder="Numeros e virgula"
        value={buyVolumes}
        onChange={(e) => { setBuy(e.target.value); }}
      />
    </div>
  );
}

InputValue.propTypes = {
  buyVolumes: PropTypes.number.isRequired,
  setBuy: PropTypes.func.isRequired,
};
