import React, { useContext } from 'react';
import * as S from './NegotiateMyActions.Style';
import Context from '../../context/Context';
import ButtonClose from '../commons/ButtonClose';

export default function NegotiateMyActions() {
  const { selectedAction } = useContext(Context);
  console.log(selectedAction);
  return (
    <S.Container>
      <S.BG>
        <S.Header>
          <ButtonClose />
          <div>
            <span>Valor médio por volume</span>
            <div>{(+selectedAction.vw).toFixed(2).replace('.', ',')}</div>
          </div>
        </S.Header>
      </S.BG>
    </S.Container>
  );
}
