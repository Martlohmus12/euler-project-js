#!/usr/bin/env bash

mkdir $PWD/src/euler-$1
cd $PWD/src/euler-$1
touch index.js && echo "const main = () => {}\n\nexport { main }; " > index.js

touch index.spec.js && 
echo "import { main } from \"./index.js\";\n
test(\"test\", () => {
  var t0 = performance.now();
  const anwser = main();
  var t1 = performance.now();\n
  console.log(\"Call to main took \" + (t1 - t0) + \" milliseconds.\");\n
  expect(anwser).toBe();
});" > index.spec.js

touch index.txt
