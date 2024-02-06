/*
Return all the prime numbers in an array using arrow functions
*/

const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbers = array.filter(isPrime);
  console.log("Prime numbers in an array:",primeNumbers);
  