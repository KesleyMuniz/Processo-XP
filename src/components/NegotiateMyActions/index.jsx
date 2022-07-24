import React, { useContext } from 'react';
import * as S from './NegotiateMyActions.Style';
import Context from '../../context/Context';
import * as Com from '../commons';

export default function NegotiateMyActions() {
  const { selectedAction } = useContext(Context);
  console.log(selectedAction);
  return (
    <S.Container>
      <S.BG>
        <S.Header>
          <Com.ButtonClose />
          <Com.AverageValue value={+selectedAction.vw} />
        </S.Header>
      </S.BG>
    </S.Container>
  );
}
