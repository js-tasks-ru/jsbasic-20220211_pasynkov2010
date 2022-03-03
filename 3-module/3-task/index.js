function camelize(str) {
  return str
    .split('')
    .reduce((prev, accum) => {
      if (prev.endsWith('-')) {
        return prev.replace('-', accum.toUpperCase());
      }
      return prev + accum;
    }, '');
}
