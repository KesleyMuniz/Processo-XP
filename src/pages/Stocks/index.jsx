import React from 'react';
import * as Comp from '../../components';
import { AvailableActions } from '../../components';

export default function Stocks() {
  return (
    <>
      <Comp.Header Logged userData />
      <br />
      <AvailableActions />
    </>
  );
}
