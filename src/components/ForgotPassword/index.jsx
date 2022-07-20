import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import { sendCode } from '../../services';

export default function ForgotPassword() {
  const { setRenderForgot, renderForgotPassword } = useContext(Context);

  const [email, setEmail] = useState('');

  const template = {
    Subject: 'Código de confirmação',
    message: 'Seu Código de confirmação é:',
    user: email,
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    await sendCode(template);
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
