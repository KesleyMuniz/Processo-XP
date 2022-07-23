import React, { useContext, useEffect, useState } from 'react';
import { getAPI, getLocalStorage, getSessionStorage } from '../../services';
import Context from '../../context/Context';

export default function UserBalance() {
  const [data, setData] = useState({});
  // const [statusDisable, setStatusDisable] = useState(null);
  const [renderBalance, setRender] = useState(true);
  const { purchaseData } = useContext(Context);
  const { id } = getSessionStorage('login') || getLocalStorage('login');

  // const verificarValues = (value) => value;

  useEffect(() => {
    const value = data.AccountBalance - (purchaseData.volume * purchaseData.value);
    if (!renderBalance < 1 && Math.sign(value) === 1) {
      setRender(value.toFixed(2));
    }
  }, [purchaseData]);

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
        <>
          <div>Saldo restante</div>
          <data>{renderBalance || data.AccountBalance}</data>
        </>
      ) : null}
    </div>
  );
}
