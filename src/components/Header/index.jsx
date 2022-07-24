import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import * as S from './Header.style';
import Sidebar from '../Sidebar';
import * as Icons from '../../assets/icons';
import { replaceNames, getSessionStorage, getLocalStorage } from '../../services';
import { getUserIDMockAPI } from '../../Mocks/Users';
import Context from '../../context/Context';

export default function Header({ Logged, userData }) {
  const [loading, setLoading] = useState(null);
  const [renderData, setRender] = useState(null);
  const { completeTransaction } = useContext(Context);

  const userSession = getSessionStorage('login');
  const userLocal = getLocalStorage('login');

  const validadeRender = async () => {
    if (userData) {
      const { id } = userLocal || userSession;
      const data = await getUserIDMockAPI(id);
      setLoading(data);
    }
  };

  useEffect(() => {
    validadeRender();
    setTimeout(() => {
      setLoading(null);
      setRender(null);
    }, 2000);
  }, [completeTransaction]);

  useEffect(() => {
    if (loading && !renderData) {
      setRender([loading]);
    }
    if (!renderData) {
      validadeRender();
    }
  }, [loading, renderData]);

  return (
    <S.Container>
      <>
        {Logged && renderData ? (
          <>
            {renderData.map(({ name, AccountBalance, id }) => (
              <S.ContainerSidebar key={id}>
                <Sidebar
                  name={replaceNames(name)}
                  AccountBalance={AccountBalance}
                />
              </S.ContainerSidebar>
            ))}
          </>
        ) : null }
        <S.ContainerDataUser>
          <span>
            {Logged && renderData
              ? (
                <>
                  {renderData.map(({ name, AccountBalance, id }) => (
                    <span key={id}>
                      <S.DivUser>
                        <img src={Icons.User} alt="Logo do usuário" />
                        {replaceNames(name)}
                      </S.DivUser>
                      <S.DivUser>
                        <img src={Icons.Balance} alt="Logo do usuário" />
                        {`R$ ${AccountBalance}`}
                      </S.DivUser>
                    </span>
                  ))}
                </>
              ) : null}
          </span>
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
