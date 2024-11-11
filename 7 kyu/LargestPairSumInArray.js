// Given a sequence of numbers, find the largest pair sum in the sequence.

//My Solution

function largestPairSum(numbers) {
    return numbers.sort((a, b) => a - b).slice(-2).reduce((acc, curr) => acc += curr);
}