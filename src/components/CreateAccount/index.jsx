import React, { useContext } from 'react';
import Context from '../../context/Context';

export default function CreateAccount() {
  const { renderCreate, setCreate } = useContext(Context);
  return (
    <div>
      <h1>Em construção</h1>
      <p>
        Voce pode encontrar algumas contas que foram usadas como Mock nesse
        {' '}
        <a target="_blank" href="https://62d8431d90883139358e6521.mockapi.io/User" rel="noreferrer">Link</a>
      </p>
      <link rel="stylesheet" href="" />
      <button
        type="button"
        onClick={() => { setCreate(!renderCreate); }}
      >
        Voltar
      </button>
    </div>
  );
}
