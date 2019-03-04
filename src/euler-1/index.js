const main = (number) => {
  let sum = 0;
  for( let i = 1; i < number; i++) {
    if (isMultiple(i)) {
      sum += i;
    }
  }

  return sum;
}

const isMultiple = (num) => {
  return num % 3 == 0 || num % 5 == 0;
} 

export { main }; 
