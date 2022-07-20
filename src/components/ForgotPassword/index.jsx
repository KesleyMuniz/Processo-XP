import React, { useContext } from 'react';
import Context from '../../context/Context';

export default function ForgotPassword() {
  const { setRenderForgot, renderForgotPassword } = useContext(Context);
  return (
    <div>
      {renderForgotPassword
        ? (
          <div>
            <h1>
              Esqueci minha senha
            </h1>

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
