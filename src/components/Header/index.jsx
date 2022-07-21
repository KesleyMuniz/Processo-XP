import PropTypes from 'prop-types';
import React from 'react';
import * as S from './Header.style';
import Sidebar from '../Sidebar';
import * as Icons from '../../assets/icons';

export default function Header({ Logged }) {
  return (
    <S.Container>
      <S.SpanSidebarContainer>
        <Sidebar />
      </S.SpanSidebarContainer>
      <S.ContainerDataUser>
        {Logged
      && (
        <>
          <S.DivNameUser>
            <img src={Icons.User} alt="Logo do usuário" />
            Nome do usuário
          </S.DivNameUser>
          <S.DivBalanceUser>
            <img src={Icons.Balance} alt="Logo do usuário" />
            Saldo da conta
          </S.DivBalanceUser>
        </>
      )}
      </S.ContainerDataUser>
      <S.DivName>
        XP
      </S.DivName>
      <S.DivLastName>
        Investimentos
      </S.DivLastName>
    </S.Container>
  );
}

Header.propTypes = {
  Logged: PropTypes.bool,
};

Header.defaultProps = {
  Logged: false,
};
