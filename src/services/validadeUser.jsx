/* eslint-disable no-console */
import { getMockAPI } from '../Mocks/Users';

const validade = async (value, key) => {
  const data = await getMockAPI();
  if (key === 'email') {
    const result = data.some((el) => el.email === value);
    return result;
  }
  const result = data.some((el) => el.password === value);
  return result;
};

const validadeUser = async (email, password = null) => {
  if (!password) {
    const result = await validade(email, 'email');
    console.log(result);
    return result;
  }
  const result = (await validade(email, 'email') && await validade(password));
  return result;
};

export default validadeUser;
