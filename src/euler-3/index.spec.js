import { main } from "./index.js";

test("should return the largest prime factor of 15", function() {
  var t0 = performance.now();
  const anwser = main(15);
  var t1 = performance.now();

  console.log("Call to main took " + (t1 - t0) + " milliseconds.");

  expect(anwser).toEqual(5);
});

test("should return the largest prime factor of 13195", function() {
  var t0 = performance.now();
  const anwser = main(13195);
  var t1 = performance.now();

  console.log("Call to main took " + (t1 - t0) + " milliseconds.");

  expect(anwser).toEqual(29);
});

test("should return the largest prime factor of 600851475143", function() {
  var t0 = performance.now();
  const anwser = main(600851475143);
  var t1 = performance.now();

  console.log("Call to main took " + (t1 - t0) + " milliseconds.");

  expect(anwser).toEqual(6857);
});
