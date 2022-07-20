export const getMockAPI = () => {
  const result = fetch('https://62d8431d90883139358e6521.mockapi.io/User')
    .then((resp) => resp.json())
    .catch((error) => {
      throw new Error(error.text);
    });
  return result;
};

export const createUserMockAPI = ({ email, password, name }) => {
  const request = new Request('https://62d8431d90883139358e6521.mockapi.io/User', {
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
      console.log('result', result);
    }).catch((error) => {
      console.log(error);
    });
};
