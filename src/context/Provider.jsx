import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [renderForgotPassword, setRenderForgot] = useState(false);
  const [renderCreate, setCreate] = useState(false);
  const [userData, setUserData] = useState(null);
  const [Negotiation, setNegotiation] = useState(false);
  const [nameAction, setNameAction] = useState(null);
  const [selectedAction, setSelected] = useState([]);
  const [data, setData] = useState({});
  const [purchaseData, setPurchase] = useState(null);
  const [statusDisable, setStatusDisable] = useState(null);
  const [sendBuy, setSendBuy] = useState(null);
  const [sendSell, setSendSell] = useState(null);
  const [completeTransaction, setCompleted] = useState(null);
  const [openNegotiation, setOpen] = useState(null);
  const [reset, setReset] = useState(false);

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
    selectedAction,
    setSelected,
    data,
    setData,
    purchaseData,
    setPurchase,
    statusDisable,
    setStatusDisable,
    sendBuy,
    setSendBuy,
    completeTransaction,
    setCompleted,
    openNegotiation,
    setOpen,
    sendSell,
    setSendSell,
    reset,
    setReset,
  }), [
    statusDisable,
    purchaseData,
    renderForgotPassword,
    renderCreate,
    userData,
    Negotiation,
    data,
    sendBuy,
    setSendBuy,
    completeTransaction,
    openNegotiation,
    sendSell,
  ]);
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
