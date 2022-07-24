import PropTypes from 'prop-types';
import React from 'react';

export default function AvailableVolume({ value, calculatedValue, calculatedOptions }) {
  return (
    <div>
      <span>Volume disponível</span>
      {calculatedOptions ? (

        <div>{((value) - (calculatedValue)).toFixed(0)}</div>
      ) : (
        <div>{(value) - calculatedValue}</div>
      )}
    </div>
  );
}

AvailableVolume.propTypes = {
  calculatedValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  calculatedOptions: PropTypes.bool.isRequired,
};
