/*
 programs in anonymous function & IIFE
1(g)Remove duplicates from an array
*/



(function(arr) {
    let uniqueArray = arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
    
    console.log("Array after the duplicates removed:",uniqueArray);
})([1, 2, 3, 4, 4, 5, 6, 6, 6, 3]);
