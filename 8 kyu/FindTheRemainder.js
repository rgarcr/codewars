// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

//My solution

function remainder(n, m) {
    const max = Math.max(n, m);
    const min = Math.min(n, m);
    return max % min;
}