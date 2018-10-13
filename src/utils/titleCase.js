export default str => (
  str !== ""
    ? str[0].toUpperCase() + str.substr(1)
    : str
);
