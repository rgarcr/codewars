/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/


//My Solution
//during call back function add to accumulator if current value is greater than 0
function positiveSum(arr) {
    return arr.reduce((acc, curr) => {
        if (curr > 0) acc += curr;
        return acc;
    }, 0)
}