/*
 programs in anonymous function & IIFE
1(e)Return all the palindromes in an array
*/

(function(arr) {
    let isPalindrome = function(str) {
        return str === str.split('').reverse().join('');
    };
    let palindromes = arr.filter(function(item) {
        return isPalindrome(item);
    });
    console.log("The palindromes in an array:",palindromes);
})(["racecar", "level", "hello", "madam", "noon", "world"]);
