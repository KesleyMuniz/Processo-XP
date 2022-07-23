import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import { POSTDataUser } from '../../services/userEdit';
import * as S from './ConfirmBuy.style';

export default function ConfirmBuy({ buy }) {
  const [makeSale, setMakeSale] = useState(null);
  const { setSendBuy, purchaseData } = useContext(Context);
  console.log(buy);
  console.log(purchaseData);

  useEffect(() => {
    const createBody = () => {
      const { AccountBalance, user } = buy;
      const body = {
        AccountBalance,
      };
      return { body, id: user.id };
    };
    const confirmPurchase = () => {
      const { body, id } = createBody();
      POSTDataUser(id, body);
    };
    confirmPurchase();
  }, [makeSale]);
  return (
    <S.BG>
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
