import { main } from './index.js'

test('problem 1000', () => {
  var t0 = performance.now();
  const anwser = main(1000);
  var t1 = performance.now();
  console.log("Call to main took " + (t1 - t0) + " milliseconds.")

  expect(anwser).toBe(233168);
});

test('problem 10', () => {
  var t0 = performance.now();
  const anwser = main(10);
  var t1 = performance.now();
  console.log("Call to main took " + (t1 - t0) + " milliseconds.")
  expect(anwser).toBe(23);
});
