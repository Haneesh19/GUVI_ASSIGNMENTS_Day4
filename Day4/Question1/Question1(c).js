/*
 programs in anonymous function & IIFE
1(c)Sum of all numbers in an array
*/

(function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("The Sum of all numbers in an array:", sum);
})([1, 2, 3, 4, 5]);
