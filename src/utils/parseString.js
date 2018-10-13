export default str => {
  return str
    .split("&#039;").join("'")
    .split("&quot;").join("\"")
    .split("&lsquo;").join("\"")
    .split("&rsquo;").join("\"");
};
