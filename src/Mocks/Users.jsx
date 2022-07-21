const url = 'https://62d8431d90883139358e6521.mockapi.io/User';
export const getMockAPI = () => {
  const result = fetch(url)
    .then((resp) => resp.json())
    .catch((error) => {
      throw new Error(error.text);
    });
  return result;
};

export const getUserIDMockAPI = (id) => {
  const urlGetID = `https://62d8431d90883139358e6521.mockapi.io//User/${id}`;
  const result = fetch(urlGetID)
    .then((resp) => resp.json())
    .catch((error) => {
      throw new Error(error.text);
    });
  return result;
};

export const createUserMockAPI = ({ email, password, name }) => {
  const request = new Request(url, {
    method: 'POST',
    body: {
      email,
      password,
      name,
    },
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
