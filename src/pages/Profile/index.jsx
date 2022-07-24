import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Comp from '../../components';

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <Comp.Header Logged userData />
      <div>Pagina em contração</div>

      <button
        type="button"
        onClick={() => {
          navigate('/');
          localStorage.removeItem('login');
        }}
      >
        Sair

      </button>
      <Comp.Footer />
    </div>
  );
}
