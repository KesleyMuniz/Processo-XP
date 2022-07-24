import { getLocalStorage } from './localStorage';
import { getSessionStorage } from './sessionStorage';
import { getDataUser, POSTDataUser } from './userEdit';

const createBody = (value) => ({
  AccountBalance: value,
});

const getMoney = async (value) => {
  const { id } = getLocalStorage('login') || getSessionStorage('login');
  const { AccountBalance } = await getDataUser(id);
  const body = createBody((+AccountBalance) - (+value));
  const result = POSTDataUser(id, body);
  return result;
};

const putMoney = async (value) => {
  const { id } = getLocalStorage('login') || getSessionStorage('login');
  const { AccountBalance } = await getDataUser(id);
  const body = createBody((+AccountBalance) + (+value));
  const result = POSTDataUser(id, body);
  return result;
};

const carryOutTransactions = (value, type) => {
  let result;
  if (type === 'withdraw') {
    result = getMoney(value);
  }
  if (type === 'deposit') {
    result = putMoney(value);
  }
  return result;
};

export default carryOutTransactions;
