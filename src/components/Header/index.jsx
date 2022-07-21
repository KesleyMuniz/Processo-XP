import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as S from './Header.style';
import Sidebar from '../Sidebar';
import * as Icons from '../../assets/icons';
import { replaceNames, getSessionStorage } from '../../services';
import { getUserIDMockAPI } from '../../Mocks/Users';

export default function Header({ Logged, userData }) {
  const [loading, setLoading] = useState(null);
  const [renderData, setRender] = useState(null);

  const validadeRender = async () => {
    if (userData) {
      const user = await getSessionStorage('login');
      const UserData = await getUserIDMockAPI(user.id);
      setLoading(UserData);
    }
  };
  useEffect(() => {
    if (loading) {
      setRender(loading);
    }
    if (!renderData) {
      validadeRender();
    }
  }, [loading, renderData]);
  return (
    <S.Container>
      <>
        {Logged && renderData ? <Sidebar /> : null }
        <S.ContainerDataUser>
          <div>
            {Logged && renderData
              ? (
                <>
                  {[renderData].map(({ name, AccountBalance }) => (
                    <>
                      <S.DivUser>
                        <img src={Icons.User} alt="Logo do usuário" />
                        {replaceNames(name)}
                      </S.DivUser>
                      <S.DivUser>
                        <img src={Icons.Balance} alt="Logo do usuário" />
                        {`R$ ${AccountBalance}`}
                      </S.DivUser>
                    </>
                  ))}
                </>
              ) : null}
          </div>
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
  userData: PropTypes.bool,
};

Header.defaultProps = {
  Logged: false,
  userData: false,
};
