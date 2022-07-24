import React, { useContext } from 'react';
import * as S from './NegotiateMyActions.Style';
import Context from '../../context/Context';

export default function NegotiateMyActions() {
  const { setOpen } = useContext(Context);
  return (
    <S.Container>
      <S.BG>
        <S.Header>
          <button
            type="button"
            onClick={() => { setOpen(false); }}
          >
            X
          </button>
        </S.Header>
      </S.BG>
    </S.Container>
  );
}
