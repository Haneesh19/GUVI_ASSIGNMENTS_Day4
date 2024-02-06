/*
 programs in anonymous function & IIFE
1(d)Return all the prime numbers in an array
*/





(function() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

    let primes = numbers.filter(function(num) {
        if (num < 2) return false; 
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; 
        }
        return true; 
    });

    console.log("Prime numbers in the array:", primes);
})();
