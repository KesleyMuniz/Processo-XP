import React, { useEffect, useState } from 'react';
import { getAPI, getLocalStorage, getSessionStorage } from '../../services';

export default function UserBalance() {
  const [data, setData] = useState({});
  const { id } = getSessionStorage('login') || getLocalStorage('login');
  useEffect(() => {
    const dataUser = async () => {
      const user = await getAPI(`https://62d8431d90883139358e6521.mockapi.io/User/${id}`);
      if (user) setData(user);
    };
    dataUser();
  }, []);
  return (
    <div>
      {data ? (
        <div>Saldo do usuário</div>
      ) : null}
    </div>
  );
}
