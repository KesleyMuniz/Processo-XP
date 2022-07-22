import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [renderForgotPassword, setRenderForgot] = useState(false);
  const [renderCreate, setCreate] = useState(false);
  const [userData, setUserData] = useState(null);
  const [Negotiation, setNegotiation] = useState(false);
  const [nameAction, setNameAction] = useState(null);

  const values = useMemo(() => ({
    renderForgotPassword,
    setRenderForgot,
    renderCreate,
    setCreate,
    userData,
    setUserData,
    Negotiation,
    setNegotiation,
    nameAction,
    setNameAction,
  }), [renderForgotPassword, renderCreate, userData, Negotiation]);
  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
