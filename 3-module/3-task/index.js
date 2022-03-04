function camelize(str) {
  return str
    .split("")
    .reduce((prevVal, curVal) => {
    if (prevVal.endsWith("-")) {
      return prevVal.replace("-", curVal.toUpperCase());
    }
    return prevVal + curVal;
  }, "");
}
