import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import * as S from './Header.style';
import Sidebar from '../Sidebar';
import * as Icons from '../../assets/icons';
import Context from '../../context/Context';
import { replaceNames } from '../../services';

export default function Header({ Logged }) {
  const { userData } = useContext(Context);
  return (
    <S.Container>
      <>

        {Logged && <Sidebar /> }
        <S.ContainerDataUser>
          {Logged
      && (
      <>
        <S.DivUser>
          <img src={Icons.User} alt="Logo do usuário" />
          {replaceNames(userData.name)}
        </S.DivUser>
        <S.DivUser>
          <img src={Icons.Balance} alt="Logo do usuário" />
          {`R$ ${userData.AccountBalance}`}
        </S.DivUser>
      </>

      )}
        </S.ContainerDataUser>
        <S.DivName>
          XP
        </S.DivName>
        <S.DivLastName>
          Investimentos
        </S.DivLastName>

      </>
    </S.Container>
  );
}

Header.propTypes = {
  Logged: PropTypes.bool,
};

Header.defaultProps = {
  Logged: false,
};
