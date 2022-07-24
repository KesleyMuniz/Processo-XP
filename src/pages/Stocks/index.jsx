import React, { useContext, useState } from 'react';
import * as Comp from '../../components';
import Context from '../../context/Context';
import * as S from './Stocks.style';

export default function Stocks() {
  const [selectStocksOptions, setStocksOptions] = useState(true);
  const { Negotiation } = useContext(Context);
  return (
    <S.Container>
      {Negotiation && <Comp.Negotiate />}
      <Comp.Header Logged userData />
      <S.ContainerButton>

        <S.Button
          type="button"
          onClick={() => { setStocksOptions(true); }}
        >
          Minhas Ações
        </S.Button>
        <S.Button
          type="button"
          onClick={() => { setStocksOptions(false); }}
        >
          Ações Disponíveis
        </S.Button>
      </S.ContainerButton>
      {selectStocksOptions ? (
        <Comp.MyActions />
      ) : (
        <Comp.AvailableActions />
      )}
    </S.Container>
  );
}
