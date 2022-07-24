import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import validadeUser from '../../services/validadeUser';
import { saveLocalStorage, getLocalStorage } from '../../services/localStorage';
import Context from '../../context/Context';
import saveUserContext from '../../services/saveUsers';
import { saveSessionStorage } from '../../services';
import * as S from './FormLogin.style';

export default function FormLogin() {
  const navigate = useNavigate();

  const {
    setRenderForgot,
    renderForgotPassword,
    renderCreate,
    setCreate,
    setUserData,
    userData,
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
      const { id } = userData;
      const hour = Date.now();
      if (remember) {
        saveLocalStorage('login', {
          email, password, id, hour,
        });
      }
      saveSessionStorage('login', {
        email, password, id, hour,
      });
    }

    async function LoginUser() {
      if (nextPage) {
        setUserData(await saveUserContext(email));
        salveLogin();
        navigate('/Stocks');
      }
    }

    LoginUser();
  }, [nextPage, userData]);

  return (
    <S.Form>

      <S.H1>Login</S.H1>
      <S.Label htmlFor="emailLogin">
        <S.InputEmail
          placeholder="Email"
          id="emailLogin"
          onChange={(e) => setEmail(e.target.value)}
        />
      </S.Label>
      <S.Label htmlFor="passwordLogin">
        <S.InputPassword
          placeholder="Senha"
          type="password"
          id="passwordLogin"
          onChange={(e) => setPassword(e.target.value)}
        />
      </S.Label>
      <div>
        <S.Label htmlFor="rememberLogin">
          <S.InputRememberPassword
            type="radio"
            id="rememberLogin"
            onClick={() => { setRemember(!remember); }}
            checked={remember}
            readOnly
          />
          Lembre minha senha
        </S.Label>
        <S.ForgetPassword
          type="button"
          onClick={() => { setRenderForgot(!renderForgotPassword); }}
        >
          Esqueceu a senha?
        </S.ForgetPassword>
      </div>
      <S.ButtonLogin
        type="button"
        id="submitLogin"
        onClick={async () => { setNext(validadeUser(email, password)); }}
      >
        Login

      </S.ButtonLogin>
      <S.FooterButton>
        <S.ButtonCreateAccount
          type="button"
          onClick={() => { setCreate(!renderCreate); }}
        >
          Criar uma conta
        </S.ButtonCreateAccount>
      </S.FooterButton>
    </S.Form>
  );
}
