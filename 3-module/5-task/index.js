function getMinMax(str) {
  const newArray = str
    .split(' ')
    .filter(item => Number.parseFloat(item))
    .map(item => Number.parseFloat(item));
  return {
    min: newArray.sort((a, b) => a - b)[0],
    max: newArray.sort((a, b) => b - a)[0],
  }
}
