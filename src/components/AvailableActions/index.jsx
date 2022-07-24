import React, { useEffect, useState } from 'react';
import { getAPI, getSessionStorage } from '../../services';
import TableActions from '../TableActions';

export default function AvailableActions() {
  const [actionsStatus, setActions] = useState(null);
  const [authorizationRender, setAuthorization] = useState(false);
  const actionsSession = getSessionStorage('actions');

  function merged(values, names) {
    const results = names.map((name) => ({
      ...values.find((o) => o.T === name.cd_acao_rdz),
      name: name.nm_empresa_rdz,
    }));

    if (results) setActions(results);
  }
  const filterActionsAndNames = (apiNames, apiValues) => {
    const getNames = apiNames.filter((names) => apiValues
      .filter((values) => values.T === names.cd_acao_rdz).length);

    const getActions = apiValues.filter((values) => getNames
      .filter((names) => names.cd_acao_rdz === values.T).length).sort();
    merged(getActions, getNames);
    return getActions;
  };

  useEffect(() => {
    const getActionsData = async () => {
      if (actionsSession) {
        setActions(actionsSession);
      } else {
        const date = new Date();
        const formatDate = `${date.getFullYear()}-0${date.getMonth() + 1}-${+date.getDate() - 2}`;
        const URL_ACTIONS_REAL_TIME = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${formatDate}?adjusted=true&apiKey=336BWBp6mP2tmzuKjyIHeMWy_FIfOJWc`;
        const URL_NAMES_API = 'https://api-cotacao-b3.labdo.it/api/cotacao/dt/20200102/02';
        const actions = await getAPI(URL_ACTIONS_REAL_TIME);
        const names = await getAPI(URL_NAMES_API);
        filterActionsAndNames(names, actions.results);
      }
    };
    getActionsData();
  }, []);

  useEffect(() => {
    if (actionsStatus) setAuthorization(true);
  }, [actionsStatus]);
  return (
    <span>
      {authorizationRender ? (
        <TableActions itens={actionsStatus} />
      ) : (
        <div>Loading...</div>
      )}
    </span>
  );
}
