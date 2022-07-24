import PropTypes from 'prop-types';
import React from 'react';
import * as S from './style';

export default function NegativeAndPositiveButtons({
  disabled, functionOption, name, subtraction, buyVolumes,
}) {
  const executeFunction = () => {
    if (subtraction) {
      return functionOption(1, 'subtraction');
    }
    return functionOption(buyVolumes + 1);
  };
  return (
    <S.ContainerNegativeAndPositive>
      <button
        type="button"
        disabled={disabled}
        onClick={() => { executeFunction(); }}
      >
        {name}
      </button>
    </S.ContainerNegativeAndPositive>
  );
}

NegativeAndPositiveButtons.propTypes = {
  disabled: PropTypes.bool.isRequired,
  functionOption: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  subtraction: PropTypes.bool.isRequired,
  buyVolumes: PropTypes.number,
};

NegativeAndPositiveButtons.defaultProps = {
  buyVolumes: 0,
};
