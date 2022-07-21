import PropTypes from 'prop-types';
import React from 'react';
import * as S from './Header.style';

export default function Header({ page }) {
  return (
    <S.Container>
      <div>
        {page
      && (
        <>
          <div>Nome do usuário</div>
          <div>Saldo da conta</div>
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
  page: PropTypes.bool,
};

Header.defaultProps = {
  page: false,
};
