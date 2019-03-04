const main = (input) => {
  const gen = evenFibonacciGen(input);
  let nextFib = gen.next();
  let sum = 0;
  while (!nextFib.done) {
    nextFib = gen.next();
    if (nextFib.value) {
      sum += nextFib.value;
    }
  }

  return sum;
}

function * evenFibonacciGen(input) {
  let [a, b] = [0, 1]
  while (a <= input) {
    if (a % 2 == 0) {
      yield a;
    } else {
      yield null;
    }
    [a, b] = [b, a + b]
  }
}

export { main }; 
