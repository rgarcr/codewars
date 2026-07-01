// Create a function that accepts a sequence and a non-negative integer n, and returns a sequence of the first n elements from it.

// If the sequence has fewer than n elements, return all of them.

//My solution
function take(arr, n) {
    return arr.slice(0, n);
}