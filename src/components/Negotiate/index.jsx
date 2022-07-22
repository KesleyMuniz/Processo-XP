import React, { useContext } from 'react';
import * as S from './Negotiate.style';
import Context from '../../context/Context';

export default function Negotiate() {
  const { setNegotiation } = useContext(Context);

  return (
    <S.Container>
      <S.BG>
        <header>
          <button type="button" onClick={() => { setNegotiation(false); }}>X</button>
        </header>
        <div>Index</div>
      </S.BG>
    </S.Container>
  );
}
