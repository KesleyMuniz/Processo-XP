import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import { getLocalStorage, saveLocalStorage } from '../../services/localStorage';
import { POSTDataUser } from '../../services/userEdit';
import * as S from './ConfirmSell.style';

export default function ConfirmSell({ sell }) {
  const { setSendSell, setOpen } = useContext(Context);

  const [completedBuy, setCompleted] = useState(false);
  const [makeSale, setMakeSale] = useState(false);
  const [saveState, setSave] = useState(false);

  const formatVolumeStocks = (arr, value) => arr.map((el) => (
    {
      ...el,
      v: el.v - value,
    }
  ));

  const verifyVolumeStocks = (a, b) => a <= b;

  useEffect(() => {
    function saveStock() {
      const { volume, cdg } = sell;
      const storageStock = getLocalStorage('myStocks');
      const getStock = storageStock.filter((el) => el.operationCode === cdg);
      const otherStocks = storageStock.filter((el) => el.operationCode !== cdg);
      const stockValue = getStock[0].v ? getStock[0].v : 0;
      const value = verifyVolumeStocks(stockValue, volume);
      if (value) {
        saveLocalStorage('myStocks', otherStocks);
        setSave(true);
      } else {
        let result = [];
        const formatStock = formatVolumeStocks(getStock, volume);
        result = result.concat(otherStocks, formatStock);
        saveLocalStorage('myStocks', result);
        setSave(true);
      }
      if (saveState) {
        setCompleted(true);
        const myTimeout = setTimeout(() => {
          setSendSell(false);
          setOpen(false);
        }, 4000);
        return myTimeout;
      }
      return false;
    }

    const createBody = () => {
      const {
        AccountBalance, user, value, volume,
      } = sell;
      const result = (+AccountBalance + (+value * +volume)).toFixed(2);
      const body = {
        AccountBalance: result,
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
  }, [makeSale, saveState]);

  return (
    <S.BG>
      {completedBuy && <div>Operação finalizada</div>}
      <S.Container>
        <S.Div>Tem certeza de deseja fazer esse operação?</S.Div>
        <S.ButtonContainer>
          <S.Button type="button" onClick={() => { setMakeSale(true); }}>
            Sim
          </S.Button>
          <S.Button type="button" onClick={() => { setSendSell(false); }}>
            Não
          </S.Button>
        </S.ButtonContainer>
      </S.Container>
    </S.BG>
  );
}

ConfirmSell.propTypes = {
  sell: PropTypes.instanceOf(Object).isRequired,
};
