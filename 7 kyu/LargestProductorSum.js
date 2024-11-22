// Description
// For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.

// If the sum of the n largest numbers is higher, return "sum"
// If the product of the n smallest numbers is higher, return "product"
// If the 2 values are equal, return "same"

// Note The array will never be empty and n will always be smaller than the length of the array.

//My solution

function sumOrProduct(array, n) {
    array.sort((a, b) => a - b);
    let sum = array.slice(array.length - n).reduce((acc, curr) => acc += curr);
    let prod = array.slice(0, n).reduce((acc, curr) => acc *= curr);
    return sum > prod ? 'sum' : (sum < prod ? "product" : "same");
}