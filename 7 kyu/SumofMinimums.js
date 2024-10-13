//Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

//My solution

function sumOfMinimums(arr) {
    return arr.reduce((acc, curr) => acc += Math.min(...curr), 0)
}