import React, { useContext } from 'react';
import Context from '../../context/Context';

export default function ButtonSell() {
  const { setSendSell } = useContext(Context);
  return (
    <div>
      <button type="button" onClick={() => { setSendSell(true); }}>
        Confirmar
      </button>
    </div>
  );
}
