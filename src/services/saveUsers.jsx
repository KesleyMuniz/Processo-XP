import { getMockAPI, getUserIDMockAPI } from '../Mocks/Users';

const saveUserContext = async (email) => {
  const data = await getMockAPI();
  const getID = data.filter((el) => el.email === email);
  console.log(getID);
  const getUser = await getUserIDMockAPI(getID[0].id);
  console.log(getUser);
  return getUser;
};

export default saveUserContext;
