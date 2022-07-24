import PropTypes from 'prop-types';
import React from 'react';
import * as S from './sidebar.style';
import * as Icons from '../../assets/icons';

export default function Sidebar({ name, AccountBalance }) {
  return (
    <S.SpanSidebarContainer>
      <S.ULContainer>
        <S.LI>
          <S.DivUser>
            {name}
            <img src={Icons.User} alt="Logo do usuário" />
          </S.DivUser>
        </S.LI>
        <S.LI>
          <S.DivUser>
            {`${AccountBalance} R$`}
            <img src={Icons.Balance} alt="Logo do usuário" />
          </S.DivUser>
        </S.LI>
      </S.ULContainer>
    </S.SpanSidebarContainer>
  );
}

Sidebar.propTypes = {
  AccountBalance: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
