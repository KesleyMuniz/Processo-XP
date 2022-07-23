export const getAPI = (url) => {
  const result = fetch(url)
    .then((resp) => resp.json())
    .catch((error) => {
      throw new Error(error.text);
    });
  return result;
};

export const postAPI = (url, body) => {
  const request = new Request(url, {
    method: 'POST',
    body,
    headers: new Headers(),
  });
  fetch(request)
    .then((result) => {
    // eslint-disable-next-line no-console
      console.log('result', result);
    }).catch((error) => {
      throw new Error(error);
    });
};

export const getStocksDetailed = async (stocks) => {
  const date = new Date();
  const dataAtual = `${date.getFullYear()}-0${date.getMonth() + 1}-${+date.getDate() - 2}`;
  const previousDate = `${date.getFullYear()}-0${+date.getMonth() - 5}-${+date.getDate() - 2}`;
  const URL = `https://api.polygon.io/v2/aggs/ticker/${stocks}/range/1/day/${previousDate}/${dataAtual}?adjusted=true&sort=asc&limit=5000&apiKey=336BWBp6mP2tmzuKjyIHeMWy_FIfOJWc`;
  const data = await getAPI(URL);
  return data.results;
};
