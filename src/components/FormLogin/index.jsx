import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import validadeUser from '../../services/validadeUser';
import { saveLocalStorage, getLocalStorage } from '../../services/localStorage';
import Context from '../../context/Context';
import saveUserContext from '../../services/saveUsers';

export default function FormLogin() {
  const navigate = useNavigate();

  const {
    setRenderForgot,
    renderForgotPassword,
    renderCreate,
    setCreate,
    setUserData,
  } = useContext(Context);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [remember, setRemember] = useState(false);
  const [nextPage, setNext] = useState(false);

  useEffect(() => {
    function verifyUser() {
      const user = getLocalStorage('login');
      return user ? navigate('/Stocks') : null;
    }
    verifyUser();
  });

  useEffect(() => {
    function salveLogin() {
      if (remember) {
        saveLocalStorage('login', { email, password });
      }
    }

    function LoginUser() {
      if (nextPage) {
        salveLogin();
        setUserData(saveUserContext(email));
        navigate('/Stocks');
      }
    }

    LoginUser();
  }, [nextPage]);

  return (
    <form>

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
            readOnly
          />
          Lembrar minha senha
        </label>
        <button
          type="button"
          onClick={() => { setRenderForgot(!renderForgotPassword); }}
        >
          Esqueci minha senha
        </button>
      </div>
      <button
        type="button"
        id="submitLogin"
        onClick={async () => { setNext(validadeUser(email, password)); }}
      >
        Entrar

      </button>
      <footer>
        <button
          type="button"
          onClick={() => { setCreate(!renderCreate); }}
        >
          Criar conta
        </button>
      </footer>
    </form>
  );
}
