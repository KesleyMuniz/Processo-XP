import emailjs from 'emailjs-com';
import env from 'react-dotenv';

const generateCoding = Math.floor(Math.random() * env.REACT_APP_NUMBER_VALUE);
export const sendCode = ({ Subject, message, user }) => (
  emailjs.send(
    env.REACT_APP_SERVICE_ID,
    env.REACT_APP_TEMPLATE_ID,
    {
      Subject,
      message,
      coding: generateCoding,
      user,
    },
    env.REACT_APP_USER_ID,
  ).then(() => {
  }, (error) => {
    throw new Error(error.text);
  }));

export const sendAccount = ({
  Subject, toName, Email, Senha, user,
}) => (
  emailjs.send(
    env.REACT_APP_SERVICE_ID,
    env.REACT_APP_TEMPLATE_ID,
    {
      Subject, // 'Assunto'
      toName, // 'Nome do usuário'
      Email, // 'a'
      Senha, // 'Senha do usuário'
      user, // 'Email para envio'
    },
    env.REACT_APP_USER_ID,
  ).then(() => {
  }, (error) => {
    throw new Error(error.text);
  }));
