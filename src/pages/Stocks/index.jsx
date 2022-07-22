import React, { useContext } from 'react';
import * as Comp from '../../components';
import { AvailableActions } from '../../components';
import Context from '../../context/Context';

export default function Stocks() {
  const { Negotiation } = useContext(Context);
  return (
    <>
      {Negotiation && <Comp.Negotiate />}
      <Comp.Header Logged userData />
      <br />
      <AvailableActions />
    </>
  );
}
