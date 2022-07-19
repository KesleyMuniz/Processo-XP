import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const values = useMemo(() => ({

  }), []);
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
