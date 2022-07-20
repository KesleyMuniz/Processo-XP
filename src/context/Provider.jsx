import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
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
