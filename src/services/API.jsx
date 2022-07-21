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
