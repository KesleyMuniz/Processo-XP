import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import * as S from './ConfirmBuy.style';

export default function ConfirmBuy({ buy }) {
  const [makeSale, setMakeSale] = useState(null);
  const { setSendBuy, purchaseData } = useContext(Context);
  console.log(buy);
  console.log(purchaseData);
  console.log(makeSale);
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
