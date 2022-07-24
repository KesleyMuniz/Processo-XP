import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import { getAPI, getLocalStorage, getSessionStorage } from '../../services';
import ConfirmSell from '../ConfirmSell';
import * as S from './UserBalanceStocks.style';

export default function UserBalanceStocks() {
  const { purchaseData, setStatusDisable, sendSell } = useContext(Context);

  const [data, setData] = useState({});
  const [finalData, setFinalData] = useState({});

  const { id } = getSessionStorage('login') || getLocalStorage('login');

  useEffect(() => {
    if (purchaseData.v <= purchaseData.volume) {
      setStatusDisable(true);
    } else {
      setStatusDisable(false);
    }
  }, [purchaseData]);

  useEffect(() => {
    const dataUser = async () => {
      const user = await getAPI(`https://62d8431d90883139358e6521.mockapi.io/User/${id}`);
      if (user) setData(user);
    };
    dataUser();
  }, []);

  useEffect(() => {
    const objUser = {
      AccountBalance: data.AccountBalance,
      value: purchaseData.value,
      volume: purchaseData.volume,
      user: data,
      cdg: purchaseData.operationCode,
    };
    setFinalData(objUser);
  }, [sendSell]);
  return (
    <S.ContainerUserBalance>
      {sendSell && <ConfirmSell sell={finalData} />}
    </S.ContainerUserBalance>
  );
}
