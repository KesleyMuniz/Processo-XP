import PropTypes from 'prop-types';
import React from 'react';

export default function Amount({ value }) {
  return (
    <>
      <span>Valor total</span>
      <div>{value.toFixed(2).replace('.', ',')}</div>
    </>
  );
}

Amount.propTypes = {
  value: PropTypes.number.isRequired,
};
