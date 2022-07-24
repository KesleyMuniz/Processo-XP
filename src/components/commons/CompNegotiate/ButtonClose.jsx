import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Context from '../../../context/Context';

export default function ButtonClose({ myStocks }) {
  const { setOpen, setSendBuy, setNegotiation } = useContext(Context);
  return (
    <button
      type="button"
      onClick={() => {
        setOpen(false);
        setNegotiation(false);
        setSendBuy(!!myStocks);
      }}
    >
      X
    </button>
  );
}

ButtonClose.propTypes = {
  myStocks: PropTypes.bool,
};

ButtonClose.defaultProps = {
  myStocks: false,
};
