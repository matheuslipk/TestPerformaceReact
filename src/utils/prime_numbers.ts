const isMultiple = (number1: number, number2: number) =>
  number1 % number2 === 0;

export const getNumberPrimes = (limit = 10) => {
  const numbersPrimes = [2];

  for (let i = 3; i <= limit; i += 2) {
    let numberDivisors = 2;

    for (const prime of numbersPrimes) {
      if (isMultiple(i, prime)) {
        numberDivisors++;
        break;
      }

      if (prime * 11 > limit) {
        break;
      }
    }

    if (numberDivisors <= 2) {
      numbersPrimes.push(i);
    }
  }

  return numbersPrimes;
};

// const limit = 1000000;
// const start = new Date().getTime();

// const numberPrimes = getNumberPrimes(limit);

// const end = new Date().getTime();

// console.log(numberPrimes);

// console.log(`Existem ${numberPrimes.length}`);
// console.log(`Tempo: ${end - start}`);
