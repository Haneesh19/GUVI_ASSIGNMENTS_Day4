/*
Return all the palindromes in an array using arrow functions
*/


const isPalindrome = str => str === str.split('').reverse().join('');

const palindromes = arr => arr.filter(word => isPalindrome(word));

const words = ["level", "hello", "radar", "world", "defined"];
console.log("Given array:",words);
console.log("Palindromes in an arrray:",palindromes(words)); 

