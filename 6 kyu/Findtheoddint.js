// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let odd = A[0];
    let obj = {};

    //add numbers and count of each to obj
    A.forEach(elem => obj[elem] ? obj[elem]++ : obj[elem] = 1);

    //find which count of number is odd
    for (let key in obj)
        if (obj[key] % 2 !== 0) odd = key;

    return +odd;
}