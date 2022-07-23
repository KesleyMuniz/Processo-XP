import React, { useContext } from 'react';
import Context from '../../context/Context';

export default function ButtonBuy() {
  const { setSendBuy } = useContext(Context);
  return (
    <div>
      <button type="button" onClick={() => { setSendBuy(true); }}>
        Confirmar
      </button>
    </div>
  );
}
