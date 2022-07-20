/* eslint-disable no-console */
import { getMockAPI } from '../Mocks/Users';

const validadeUser = async (email, password) => {
  const data = await getMockAPI();
  const result = data.some((el) => (
    el.email === email && el.password === password));
  return result;
};

export default validadeUser;
