import React, { useContext } from 'react';
import * as Comp from '../../components';
import { AvailableActions } from '../../components';
import Context from '../../context/Context';

export default function Stocks() {
  const { Negotiation } = useContext(Context);
  console.log(Negotiation);
  return (
    <>
      <Comp.Header Logged userData />
      {Negotiation && <Comp.Negotiate />}
      <br />
      <AvailableActions />
    </>
  );
}
