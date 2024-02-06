/*
programs in anonymous function & IIFE
1.(A)Print odd numbers in an array
*/

(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]);
