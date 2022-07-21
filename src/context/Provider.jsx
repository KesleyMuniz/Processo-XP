import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [renderForgotPassword, setRenderForgot] = useState(false);
  const [renderCreate, setCreate] = useState(false);
  const [userData, setUserData] = useState(null);

  const values = useMemo(() => ({
    renderForgotPassword,
    setRenderForgot,
    renderCreate,
    setCreate,
    userData,
    setUserData,
  }), [renderForgotPassword, renderCreate, userData]);
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
