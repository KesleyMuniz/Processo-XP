/* eslint-disable no-console */
import axios from 'axios';

const DATE = new Date();
const CURRENT_DATE = `${DATE.getFullYear()}-0${DATE.getMonth() + 1}-${+DATE.getDate() - 2}`;
const PREVIOUS_DATE = `${DATE.getFullYear()}-0${+DATE.getMonth() - 5}-${+DATE.getDate() - 2}`;

export const getAPI = async (url) => {
  try {
    const result = await axios.get(url).then((response) => response.data);
    return result;
  } catch (e) {
    return e.response.data;
  }
};

export const getStocksDetailed = async (stocks) => (
  axios.get(`https://api.polygon.io/v2/aggs/ticker/${stocks}/range/1/day/${PREVIOUS_DATE}/${CURRENT_DATE}?adjusted=true&sort=asc&limit=5000&apiKey=336BWBp6mP2tmzuKjyIHeMWy_FIfOJWc`).then((response) => response.data));
