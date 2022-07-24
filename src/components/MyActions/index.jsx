import React from 'react';

import TableMyActions from '../TableMyActions';
import { getLocalStorage } from '../../services';

export default function MyActions() {
  const myStocksLocalStorage = getLocalStorage('myStocks');
  return (
    <div>
      <TableMyActions itens={myStocksLocalStorage} />
    </div>
  );
}
