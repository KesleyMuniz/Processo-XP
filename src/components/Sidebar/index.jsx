import React, { useContext } from 'react';
import * as S from './sidebar.style';
import * as Icons from '../../assets/icons';
import Context from '../../context/Context';
import { replaceNames } from '../../services';

export default function Sidebar() {
  const { userData } = useContext(Context);
  return (
    <S.SpanSidebarContainer>
      <S.ULContainer>
        <S.LI>
          <S.DivUser>
            {replaceNames(userData.name)}
            <img src={Icons.User} alt="Logo do usuário" />
          </S.DivUser>
        </S.LI>
        <S.LI>
          <S.DivUser>
            {`${userData.AccountBalance} R$`}
            <img src={Icons.Balance} alt="Logo do usuário" />
          </S.DivUser>
        </S.LI>
      </S.ULContainer>
    </S.SpanSidebarContainer>
  );
}
