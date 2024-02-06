/*
Print odd numbers in an array using arrow functions
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(number => {
  if (number % 2 !== 0) {
    console.log(number);
  }
});