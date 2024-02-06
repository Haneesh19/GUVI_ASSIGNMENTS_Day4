/*
Sum of all numbers in an array using arrow functions
*/

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, current) => total + current, 0);

console.log("Sum of all numbers in an array:",sum); 
