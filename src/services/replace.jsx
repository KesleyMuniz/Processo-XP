const replaceNames = (str) => {
  const removeNumber = str.replaceAll(/\d+/g, '');
  const removeCarácterEsp = removeNumber.replace('_', ' ');
  return removeCarácterEsp;
};

export default replaceNames;
