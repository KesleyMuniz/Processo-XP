import React from 'react';
import * as Comp from '../../components';

export default function AccountTransactions() {
  return (
    <div>
      <Comp.Header Logged userData />
      <Comp.AccountTransactions />
      <Comp.Footer />
    </div>
  );
}
