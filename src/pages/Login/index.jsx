import React, { useContext } from 'react';
import * as Comp from '../../components';
import Context from '../../context/Context';

export default function Login() {
  const { renderForgotPassword, renderCreate } = useContext(Context);
  return (
    <div>
      <Comp.Header />
      {renderCreate ? (
        <Comp.CreateAccount />
      )
        : (
          <div>
            {renderForgotPassword
              ? (<Comp.ForgotPassword />)
              : (
                <div>
                  <Comp.FormLogin />
                </div>
              )}
          </div>
        )}
    </div>
  );
}
