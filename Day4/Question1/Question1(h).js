/*
 programs in anonymous function & IIFE
1(h)Rotate an array by k times
*/

(function() {
    let arr = [1, 2, 3, 4, 5];
    let k = 2;
    let rotateArray = function(arr, k) {
        let len = arr.length;
        k = k % len; 
        let rotatedArray = arr.slice(len - k).concat(arr.slice(0, len - k));
        return rotatedArray;
    };
    console.log("Original array:", arr);
    console.log("Numberof times Rotated:",k)
    console.log("Rotated array:", rotateArray(arr, k));
})();
