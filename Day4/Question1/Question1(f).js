/*
 programs in anonymous function & IIFE
1(f)Return median of two sorted arrays of the same size.
*/

const findMedianSortedArrays = ((arr1, arr2) => {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
})([1, 3, 5], [2, 4, 6]);

console.log("median of two sorted arrays is:",findMedianSortedArrays); 


