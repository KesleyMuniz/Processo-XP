import React, { useContext, useState } from 'react';
import * as Comp from '../../components';
import Context from '../../context/Context';

export default function Stocks() {
  const [selectStocksOptions, setStocksOptions] = useState(true);
  const { Negotiation } = useContext(Context);
  return (
    <>
      {Negotiation && <Comp.Negotiate />}
      <Comp.Header Logged userData />
      <br />
      <button
        type="button"
        onClick={() => { setStocksOptions(true); }}
      >
        Minhas Ações
      </button>
      <button
        type="button"
        onClick={() => { setStocksOptions(false); }}
      >
        Ações Disponíveis
      </button>
      {selectStocksOptions ? (
        <Comp.Account />
      ) : (
        <Comp.AvailableActions />
      )}
    </>
  );
}
