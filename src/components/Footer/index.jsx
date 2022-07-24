import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoAccount from '../../assets/icons/money-transfer.png';
import logoStocks from '../../assets/icons/acoes.png';
import logoProfile from '../../assets/icons/resume.png';

import * as S from './Footer.style';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <S.BG>
      <S.Container>
        <S.Button>
          <button
            type="button"
            onClick={() => { navigate('/Account'); }}
          >
            <img
              src={logoAccount}
              alt="Uma mão segurando um celular, simbolizando uma transferência"
            />
          </button>
        </S.Button>
        <S.Button>
          <button
            type="button"
            onClick={() => { navigate('/Stocks'); }}
          >
            <img
              src={logoStocks}
              alt="Imagem simulando a subida de alguma ação na bolsa de valores"
            />
          </button>
        </S.Button>
        <S.Button>
          <button
            type="button"
            onClick={() => { navigate('/Stocks'); }}
          >
            <img
              src={logoProfile}
              alt="Imagem de uma caderneta com uma foto e algumas informações sobre a pessoa"
            />
          </button>
        </S.Button>
      </S.Container>
    </S.BG>
  );
}
