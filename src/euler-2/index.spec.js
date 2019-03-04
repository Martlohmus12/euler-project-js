import { main } from './index.js'

test('problem with value 4 000 000', () => {
  var t0 = performance.now();
  const anwser = main(4000000);
  var t1 = performance.now();
  console.log("Call to main took " + (t1 - t0) + " milliseconds.")
  expect(anwser).toBe(4613732);
});
