import React, { useContext } from 'react';
import * as Comp from '../../components';
import Context from '../../context/Context';

export default function Login() {
  const { renderForgotPassword } = useContext(Context);
  console.log(renderForgotPassword);
  return (
    <div>
      <Comp.Header />
      {renderForgotPassword
        ? (<Comp.ForgotPassword />)
        : (
          <div>
            <Comp.FormLogin />
          </div>
        )}

    </div>
  );
}
