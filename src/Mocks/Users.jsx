import { getAPI } from '../services/API';

const url = 'https://62d8431d90883139358e6521.mockapi.io/User';

export const getMockAPI = () => {
  const result = getAPI(url);
  return result;
};

export const getUserIDMockAPI = (id) => {
  const urlGetID = `https://62d8431d90883139358e6521.mockapi.io//User/${id}`;
  const result = getAPI(urlGetID);
  return result;
};
