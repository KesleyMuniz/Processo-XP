import PropTypes from 'prop-types';
import React from 'react';

export default function AverageValue({ value }) {
  return (
    <div>
      <span>Valor médio por volume</span>
      <div>{(value).toFixed(2).replace('.', ',')}</div>
    </div>
  );
}

AverageValue.propTypes = {
  value: PropTypes.number.isRequired,
};
