import PropTypes from 'prop-types';
import React from 'react';

export default function PurchaseOptions({ calculatedOptions, setOptions }) {
  return (
    <>
      <div>
        Opções de compras
      </div>
      <span>
        <label htmlFor="valueInputValue">
          valor
          <input
            type="radio"
            id="valueInputValue"
            name="optionsMethod"
            checked={calculatedOptions}
            readOnly
            onClick={() => setOptions(true)}
          />
        </label>
        <label htmlFor="valueInputVolume">
          <input
            type="radio"
            id="valueInputVolume"
            name="optionsMethod"
            checked={!calculatedOptions}
            readOnly
            onClick={() => setOptions(false)}
          />
          volume
        </label>
      </span>
    </>
  );
}

PurchaseOptions.propTypes = {
  calculatedOptions: PropTypes.bool.isRequired,
  setOptions: PropTypes.func.isRequired,
};
