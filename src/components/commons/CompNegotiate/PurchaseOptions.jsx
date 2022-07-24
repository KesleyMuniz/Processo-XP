import PropTypes from 'prop-types';
import React from 'react';
import * as S from './style';

export default function PurchaseOptions({ calculatedOptions, setOptions }) {
  return (
    <S.ContainerPurchaseOptions>
      <div>
        Opções de compras
      </div>
      <span>
        <label htmlFor="valueInputValue">
          VALOR
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
          VOLUME
        </label>
      </span>
    </S.ContainerPurchaseOptions>
  );
}

PurchaseOptions.propTypes = {
  calculatedOptions: PropTypes.bool.isRequired,
  setOptions: PropTypes.func.isRequired,
};
