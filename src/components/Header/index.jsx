import PropTypes from 'prop-types';
import React from 'react';
import * as S from './Header.style';
import Sidebar from '../Sidebar';

export default function Header({ Logged }) {
  return (
    <S.Container>
      <span className="SidebarContainer">
        <Sidebar />
      </span>
      <div>
        {Logged
      && (
        <>
          <S.DivNameUser>Nome do usuário</S.DivNameUser>
          <S.DivBalanceUser>Saldo da conta</S.DivBalanceUser>
        </>
      )}
      </div>
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
