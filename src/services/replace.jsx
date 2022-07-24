const replaceNames = (str) => {
  const removeNumber = str.replaceAll(/\d+/g, '');
  const removeCarácterEsp = removeNumber.replace('_', ' ');
  const removePoint = removeCarácterEsp.replace('.', ' ');
  return removePoint;
};

export default replaceNames;
