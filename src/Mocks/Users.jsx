import axios from 'axios';
import { getAPI } from '../services/API';

const URL_ALL_USERS = 'https://62d8431d90883139358e6521.mockapi.io/User';

export const getMockAPI = async () => (
  axios.get(URL_ALL_USERS).then((response) => response.data));

export const getUserIDMockAPI = (id) => {
  const urlGetID = `https://62d8431d90883139358e6521.mockapi.io//User/${id}`;
  const result = getAPI(urlGetID);
  return result;
};
