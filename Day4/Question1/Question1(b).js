/*
 programs in anonymous function & IIFE
1(b)Convert all the strings to title caps in a string array
*/

let stringArray = ["rokesh", "haneesh", "Sanjay", "nithish", "sundhar"];
(function(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase();
    }
})(stringArray);

console.log("Title caps string array:",stringArray); 
