/* eslint-disable no-console */
import axios from 'axios';

export const getDataUser = async (id) => (
  axios.get(`https://62d8431d90883139358e6521.mockapi.io/User/${id}`)
    .then((response) => response.data));

export const POSTDataUser = (id, body) => (
  axios.put(`https://62d8431d90883139358e6521.mockapi.io/User/${id}`, body)
    .then((response) => response.data));
