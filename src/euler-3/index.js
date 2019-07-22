const main = number => {

	let lastNumber = number;

	while (lastNumber > 2 ) {
		lastNumber = getLargerPrimeNumber(lastNumber);
		const prime = isPrime(lastNumber);

		if (prime) {
			break;
		}
 	}

	return lastNumber;
};

function getLargerPrimeNumber(number) {
  let i = 2;

  while (number > 1) {

  	if (number % i == 0) {
      number = number / i;
      i = i - 1;
  	}

    i = i + 1;
  }

  return i;
}

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) {
      return false;
   	}
  }

  return num > 1;
}
	
export { main }	