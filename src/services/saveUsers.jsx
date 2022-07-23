import { getMockAPI, getUserIDMockAPI } from '../Mocks/Users';

const saveUserContext = async (email) => {
  const data = await getMockAPI();
  const getID = data.filter((el) => el.email === email);
  const getUser = await getUserIDMockAPI(getID[0].id);
  return getUser;
};

export default saveUserContext;
