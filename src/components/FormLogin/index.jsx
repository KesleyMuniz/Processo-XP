import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validadeUser from '../../services/validadeUser';

export default function FormLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [remember, setRemember] = useState(false);
  const [nextPage, setNext] = useState(false);

  useEffect(() => {
    function LoginUser() {
      if (nextPage.length) {
        navigate('/Account');
      }
    }
    LoginUser();
  }, [nextPage]);

  return (
    <>
      <h1>Login</h1>
      <label htmlFor="emailLogin">
        Email:
        <input
          id="emailLogin"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="passwordLogin">
        Senha:
        <input
          type="password"
          id="passwordLogin"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <div>
        <label htmlFor="rememberLogin">
          <input
            type="radio"
            id="rememberLogin"
            onClick={() => { setRemember(!remember); }}
            checked={remember}
          />
          Lembrar minha senha
        </label>
        <button type="button">
          Esquece minha senha
        </button>
      </div>
      <button
        type="button"
        id="submitLogin"
        onClick={() => { setNext(validadeUser(email, password)); }}
      >
        Entrar

      </button>
      <footer>
        <button type="button">
          Criar conta
        </button>
      </footer>
    </>
  );
}
