import React, { useContext } from 'react';
import * as Comp from '../../components';
import Context from '../../context/Context';
import Container from './Login.Style';

export default function Login() {
  const { renderForgotPassword, renderCreate } = useContext(Context);
  return (
    <Container>
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
    </Container>
  );
}
