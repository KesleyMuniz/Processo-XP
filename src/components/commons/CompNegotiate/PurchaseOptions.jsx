import PropTypes from 'prop-types';
import React from 'react';

export default function PurchaseOptions({ calculatedOptions, setOptions }) {
  return (
    <>
      <div>
        Opções de compras
      </div>
      <div>
        <label htmlFor="valueInputValue">
          <input
            type="radio"
            id="valueInputValue"
            name="optionsMethod"
            checked={calculatedOptions}
            readOnly
            onClick={() => setOptions(true)}
          />
          valor
        </label>
      </div>
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
    </>
  );
}

PurchaseOptions.propTypes = {
  calculatedOptions: PropTypes.bool.isRequired,
  setOptions: PropTypes.func.isRequired,
};
