import React, { useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import env from 'react-dotenv';
import Context from '../../context/Context';

export default function ForgotPassword() {
  const { setRenderForgot, renderForgotPassword } = useContext(Context);

  const [email, setEmail] = useState('');
  const [code, setCode] = useState(null);

  function getRandomCod() {
    return Math.floor(Math.random() * env.REACT_APP_NUMBER_VALUE);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    await setCode(getRandomCod());

    await emailjs.send(
      env.REACT_APP_SERVICE_ID,
      env.REACT_APP_TEMPLATE_ID,
      {
        Subject: 'Código de confirmação',
        message: 'Seu Código de confirmação é:',
        coding: code,
        user: email,
      },
      env.REACT_APP_USER_ID,
    ).then((result) => {
      throw result.text;
    }, (error) => {
      throw new Error(error.text);
    });
    e.target.reset();
  }
  return (
    <div>
      {renderForgotPassword
        ? (
          <div>
            <h1>
              Esqueci minha senha
            </h1>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="emailForgot">
                Email:
                <input
                  type="text"
                  placeholder="Digite seu email"
                  id="emailForgot"
                  onChange={(e) => { setEmail(e.target.value); }}
                />
              </label>
              <button type="submit">Enviar Código</button>
            </form>
            <button
              type="button"
              onClick={() => { setRenderForgot(!renderForgotPassword); }}
            >
              Voltar
            </button>
          </div>
        ) : (null)}
    </div>
  );
}
