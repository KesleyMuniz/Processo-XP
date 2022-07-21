import React, { useEffect, useState } from 'react';
import { getAPI } from '../../services';
import TableActions from '../TableActions';

export default function AvailableActions() {
  const [actionsStatus, setActions] = useState(null);
  const [authorizationRender, setAuthorization] = useState(false);

  const getActions = async () => {
    const date = new Date();
    const formatDate = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate() - 1}`;
    const URL_GET_API_DAILY = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${formatDate}?adjusted=true&apiKey=336BWBp6mP2tmzuKjyIHeMWy_FIfOJWc`;
    const actions = await getAPI(URL_GET_API_DAILY);
    if (actions) setActions(actions.results);
  };

  useEffect(() => {
    getActions();
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
