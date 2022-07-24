import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const H1 = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 100px;
  font-weight: 60;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Label = styled.label`
`;

export const InputEmail = styled.input`
  width: 250px;
  height: 50px;
  margin: 50px;
  text-align: center;
  font-size: 15px;
  opacity: 0.5;
  border: 2px solid black;
  border-radius: 50px;
`;

export const InputPassword = styled.input`
  width: 250px;
  height: 50px;
  text-align: center;
  font-size: 30px;
  margin-bottom: 4px;
  opacity: 0.5;
  border: 2px solid black;
  border-radius: 50px;
`;

export const InputRememberPassword = styled.input`

`;

export const ForgetPassword = styled.button`
border-style: none;
margin-left: 50px;
`;

export const ButtonLogin = styled.button`
border-style: none;
width: 60%;
height: 60px;
background-image: linear-gradient(to right, #45b8e6 , #d66a9f);
margin-top: 70px;
border-radius: 10px;
`;

export const FooterButton = styled.footer`
  position: absolute;
  bottom: 50px;
`;

export const ButtonCreateAccount = styled.button`
border-style: none;
background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
  color: black;
  background-clip: text;
  -webkit-background-clip: text;
`;
