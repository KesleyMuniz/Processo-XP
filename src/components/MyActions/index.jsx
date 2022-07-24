import React, { useContext } from 'react';
import TableMyActions from '../TableMyActions';
import { getLocalStorage } from '../../services';
import Context from '../../context/Context';
import NegotiateMyActions from '../NegotiateMyActions';

export default function MyActions() {
  const { openNegotiation } = useContext(Context);
  const myStocksLocalStorage = getLocalStorage('myStocks');
  return (
    <span>
      <TableMyActions itens={myStocksLocalStorage} />
      {openNegotiation && (
        <div>
          <NegotiateMyActions />
        </div>
      )}
    </span>
  );
}
