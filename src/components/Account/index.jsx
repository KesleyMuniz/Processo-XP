import React, { useState } from 'react';
import * as S from './Account.Style';

export default function Account() {
  const [typeOperation, setType] = useState(null);
  console.log(typeOperation);
  return (
    <S.BG>
      <S.ContainerAllButtons>

        <S.ContainerButton>
          <S.Label htmlFor="buttonWithdraw">
            <S.InputRadio
              type="radio"
              id="buttonWithdraw"
              name="typeOperation"
              value="withdraw"
              onClick={(e) => { setType(e.target.value); }}
            />
            Sacar
          </S.Label>
        </S.ContainerButton>
        <S.ContainerButton>
          <S.Label htmlFor="buttonWithdraw">
            <S.InputRadio
              type="radio"
              id="buttonWithdraw"
              name="typeOperation"
              value="deposit"
              onClick={(e) => { setType(e.target.value); }}
            />
            Depositar
          </S.Label>
        </S.ContainerButton>
      </S.ContainerAllButtons>
      <S.InputNumber type="number" placeholder="Digite um valor" />
    </S.BG>
  );
}
