import React, { useContext } from 'react';
import Context from '../../context/Context';

export default function ButtonClose() {
  const { setOpen } = useContext(Context);
  return (
    <button
      type="button"
      onClick={() => { setOpen(false); }}
    >
      X
    </button>
  );
}
