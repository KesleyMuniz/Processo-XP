export const saveSessionStorage = (key, value) => (
  sessionStorage.setItem(key, JSON.stringify(value))
);

export const getSessionStorage = (key) => (
  JSON.parse(localStorage.sessionStorage(key))
);
