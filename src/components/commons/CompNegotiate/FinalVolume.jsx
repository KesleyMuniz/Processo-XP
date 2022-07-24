import PropTypes from 'prop-types';
import React from 'react';

export default function FinalVolume({ value }) {
  return (
    <>
      <span>Volume Final</span>
      <div>{Math.floor(value)}</div>
    </>
  );
}

FinalVolume.propTypes = {
  value: PropTypes.number.isRequired,
};
