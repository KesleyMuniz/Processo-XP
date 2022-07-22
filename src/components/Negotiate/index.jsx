import React, { useContext } from 'react';
import * as S from './Negotiate.style';
import Context from '../../context/Context';

export default function Negotiate() {
  const { setNegotiation } = useContext(Context);

  return (
    <S.Container>
      <S.BG>
        <S.Header>
          <button type="button" onClick={() => { setNegotiation(false); }}>X</button>
        </S.Header>
        <div>
          <span>Volume disponível</span>
          <span>Valor por volume</span>
        </div>
        <div>
          <div>
            <label htmlFor="volumeDisponivel">
              Volume
              <input type="text" id="volumeDisponivel" />
            </label>
          </div>
          <div>
            <label htmlFor="volumeActions">
              Valor
              <input type="text" id="volumeActions" />
            </label>
          </div>
        </div>
      </S.BG>
    </S.Container>
  );
}
