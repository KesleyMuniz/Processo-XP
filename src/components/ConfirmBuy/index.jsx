import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';
import { getSessionStorage, saveSessionStorage } from '../../services/sessionStorage';
import { POSTDataUser } from '../../services/userEdit';
import * as S from './ConfirmBuy.style';

export default function ConfirmBuy({ buy }) {
  const navigate = useNavigate();
  const [makeSale, setMakeSale] = useState(false);
  const [completedBuy, setCompleted] = useState(false);
  const { setSendBuy, purchaseData } = useContext(Context);

  useEffect(() => {
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
        const myTimeout = setTimeout(() => {
          navigate('/Account');
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
      {completedBuy && <div>Operação finalizada</div>}
      <S.Container>
        <S.Div>Tem certeza de deseja fazer esse operação?</S.Div>
        <S.ButtonContainer>
          <S.Button type="button" onClick={() => { setMakeSale(true); }}>
            Sim
          </S.Button>
          <S.Button type="button" onClick={() => { setSendBuy(false); }}>
            Não
          </S.Button>
        </S.ButtonContainer>
      </S.Container>
    </S.BG>
  );
}

ConfirmBuy.propTypes = {
  buy: PropTypes.instanceOf(Object).isRequired,
};
