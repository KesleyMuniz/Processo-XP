import Users from '../Mocks/Users';

const validadeUser = (email, password) => Users.filter((el) => {
  const result = el.email === email
  && el.password === password;
  return result;
});

export default validadeUser;
