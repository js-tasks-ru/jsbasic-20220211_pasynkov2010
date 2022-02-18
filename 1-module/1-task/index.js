function factorial(n) {
  let acc = 1;

  while (n > 0) {
    acc += acc * (n - 1);
    n--;
  }

  return acc;
}
