import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import { getLocalStorage, saveLocalStorage } from '../../services';
import { getSessionStorage, saveSessionStorage } from '../../services/sessionStorage';
import { POSTDataUser } from '../../services/userEdit';
import * as S from './ConfirmBuy.style';

export default function ConfirmBuy({ buy }) {
  const [makeSale, setMakeSale] = useState(false);
  const [completedBuy, setCompleted] = useState(false);

  const { setSendBuy, purchaseData, setNegotiation } = useContext(Context);

  useEffect(() => {
    function saveLocalStorageMyStocks() {
      const { Stock, volume, value } = purchaseData;

      const localStorageStocks = getLocalStorage('myStocks');
      const myStocksArray = getLocalStorage('myStocks') !== null
        ? localStorageStocks : [];

      const newStocks = {
        T: Stock[0].T,
        name: Stock[0].name,
        v: volume,
        o: Stock[0].o,
        l: Stock[0].l,
        vw: Stock[0].vw,
        h: Stock[0].h,
        amount: value,
        operationCode: Math.floor(Math.random() * 10000000000000),
      };

      myStocksArray.push(newStocks);

      return saveLocalStorage('myStocks', myStocksArray);
    }

    function saveStock() {
      const { Stock, volume } = purchaseData;
      const stocksAll = getSessionStorage('actions');
      const subtractionValue = +(Stock[0].v) - +(volume);

      const results = stocksAll.map((s) => ({
        ...s,
        v: s.T === Stock[0].T ? subtractionValue : s.v,
      }));

      if (results) {
        saveSessionStorage('actions', results);
        setCompleted(true);
        saveLocalStorageMyStocks();
        const myTimeout = setTimeout(() => {
          setSendBuy(false);
          setNegotiation(false);
        }, 1000);
        return myTimeout;
      }
      return !!results;
    }

    const createBody = () => {
      const { AccountBalance, user } = buy;
      const body = {
        AccountBalance,
      };
      return { body, id: user.id };
    };
    if (makeSale) {
      const confirmPurchase = () => {
        const { body, id } = createBody();
        const saveBalance = POSTDataUser(id, body);
        if (saveBalance) {
          saveStock();
        }
      };
      confirmPurchase();
    }
  }, [makeSale]);
  return (
    <S.BG>
      <S.Container>
        {completedBuy ? (<S.Div>Operação finalizada</S.Div>)
          : (
            <>
              <S.Div>Tem certeza de deseja fazer esse operação?</S.Div>
              <S.ButtonContainer>
                <S.ButtonYes type="button" onClick={() => { setMakeSale(true); }}>
                  Sim
                </S.ButtonYes>
                <S.ButtonNo type="button" onClick={() => { setSendBuy(false); }}>
                  Não
                </S.ButtonNo>
              </S.ButtonContainer>
            </>
          )}
      </S.Container>
    </S.BG>
  );
}

ConfirmBuy.propTypes = {
  buy: PropTypes.instanceOf(Object).isRequired,
};
