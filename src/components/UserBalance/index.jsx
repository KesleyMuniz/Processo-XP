import React, { useContext, useEffect, useState } from 'react';
import { getAPI, getLocalStorage, getSessionStorage } from '../../services';
import Context from '../../context/Context';
import ConfirmBuy from '../ConfirmBuy';

export default function UserBalance() {
  const { purchaseData, setStatusDisable, sendBuy } = useContext(Context);

  const [data, setData] = useState({});
  const [renderBalance, setRender] = useState(true);
  const [priceValue, setPriceValue] = useState(0);
  const [firstRender, setFirst] = useState(true);
  const [finalData, setFinalData] = useState({});

  useEffect(() => {
    const objUser = {
      AccountBalance: +renderBalance,
      user: data,
    };
    setFinalData(objUser);
  }, [sendBuy]);

  const { id } = getSessionStorage('login') || getLocalStorage('login');

  const verifyRender = () => {
    if (firstRender && purchaseData.value > 0) {
      setPriceValue(purchaseData.value);
      setFirst(false);
    } else if (!firstRender && purchaseData.value === 0) {
      setFirst(true);
    }
  };

  useEffect(() => {
    verifyRender();
    const value = data.AccountBalance - (purchaseData.volume * priceValue);
    if (!renderBalance < 1 && value > priceValue) {
      setRender(value.toFixed(2));
      setStatusDisable(false);
    } else {
      setRender(value.toFixed(2));
      setStatusDisable(true);
    }
  }, [purchaseData, data]);

  useEffect(() => {
    const dataUser = async () => {
      const user = await getAPI(`https://62d8431d90883139358e6521.mockapi.io/User/${id}`);
      if (user) setData(user);
    };
    dataUser();
  }, []);

  return (
    <div>
      <div>Saldo restante</div>

      {+renderBalance ? (
        <data>{renderBalance}</data>
      ) : (
        <div>Carregando...</div>
      )}
      {sendBuy && <ConfirmBuy buy={finalData} />}
    </div>
  );
}
