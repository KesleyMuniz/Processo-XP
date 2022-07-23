import React, { useContext } from 'react';
import Context from '../../context/Context';

export default function CreateAccount() {
  const { renderCreate, setCreate } = useContext(Context);
  return (
    <div>
      <h1>
        Crie sua conta
      </h1>
      <button
        type="button"
        onClick={() => { setCreate(!renderCreate); }}
      >
        Voltar
      </button>
    </div>
  );
}
